const router = require('express').Router();
// const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all posts - findAll()
// include user's username and comments with user's username
// tested 09/22/21, 8:51pm (works)
router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'title', 'url', 'body', 'created_at'],
    order: [['created_at', 'DESC']],
    include: [
      {
        model: Comment,
        attributes: ['id', 'body', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(postData => {
      if (!postData) {
        res.status(404).json({ message: 'No posts found' });
        return;
      }
      res.json(postData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    })
});

// get single post by id - findOne()
// include user's username and comments with user's username
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'title', 'url', 'body', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Comment,
        attributes: ['id', 'body', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      }
    ]
  })
    .then(postData => {
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(postData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create post - create()
// tested 09/22/21, 9:00pm (works)
router.post('/', withAuth ,(req, res) => {
  Post.create({
    user_id: req.session.user_id,
    url: req.body.url,
    title: req.body.title,
    body: req.body.body
  })
    .then(postData => res.json(postData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Post.update({
      url: req.body.url,
      title: req.body.title,
      body: req.body.body
    },
    {
      where: { id: req.params.id }
    })
    .then(postData => {
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(postData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete post - destroy()
// tested 09/22/21, 9:05pm (NOT WORKING)
router.delete('/:id', withAuth ,(req, res) => {
  Post.destroy({ where: { id: req.params.id } })
    .then(postData => {
      if (!postData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(postData)
    })
    .catch(err => {
      console.log(err);
      res.status(500);
    });
});

module.exports = router;