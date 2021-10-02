const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Likes } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'post_url',
      'title',
      'post_body',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM likes WHERE post.id = likes.post_id)'), 'likes_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_body', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['name', 'username']
        }
      },
      {
        model: User,
        attributes: ['name', 'username']
      }
    ]
  })
    .then(postData => {
      const posts = postData.map(post => post.get({ plain: true }));

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_url',
      'title',
      'post_body',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM likes WHERE post.id = likes.post_id)'), 'likes_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_body', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['name', 'username']
        }
      },
      {
        model: User,
        attributes: ['name', 'username']
      }
    ]
  })
    .then(postData => {
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = postData.get({ plain: true });

      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('loginpage',
    {
      layout: 'signinup'
    });
});

module.exports = router;