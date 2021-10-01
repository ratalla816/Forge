const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for admin
router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: { user_id: req.session.user_id },
    attributes: [
      'id',
      'title',
      'created_at',
      'post_body',
      [sequelize.literal('(SELECT COUNT(*) FROM react WHERE post.id = react.post_id)'), 'react_count']
    ],
    include: [
      {
        model: User,
        attributes: ['name', 'username']
      },
      {
        model: Comment,
        attributes: [
          'id',
          'comment_body',
          'post_id',
          'user_id',
          'created_at'],
        include: {
          model: User,
          attributes: ['name', 'username']
        }
      }
    ]
  })
    .then(postData => {
      const posts = postData.map(post => post.get({ plain: true }));
      res.render('adminpage',
        {
          layout: 'main',
          posts,
          loggedIn: true
        });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.get('/create/', withAuth, (req, res) => {
  Post.findAll({
    where: { user_id: req.session.user_id },
    attributes: [
      'id',
      'title',
      'created_at',
      'post_body'
    ],
    include: [
      {
        model: User,
        attributes: ['name', 'username']
      },
      {
        model: Comment,
        attributes: [
          'id',
          'comment_body',
          'post_id',
          'user_id',
          'created_at'
        ],
        include: {
          model: User,
          attributes: ['name', 'username']
        }
      }
    ]
  })
    .then(postData => {
      const posts = postData.map(post => post.get({ plain: true }));
      res.render('create-post', {
        posts,
        loggedIn: true
      });
    }).catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Post.findOne({
    where: { id: req.params.id },
    attributes: [
      'id',
      'title',
      'created_at',
      'post_body',
      [sequelize.literal('(SELECT COUNT(*) FROM react WHERE post.id = react.post_id)'), 'react_count']
    ],
    include: [
      {
        model: Comment,
        attributes: [
          'id',
          'comment_body',
          'post_id',
          'user_id',
          'created_at'
        ],
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
      if (postData) {
        const post = postData.get({ plain: true });

        res.render('edit-post', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = router;