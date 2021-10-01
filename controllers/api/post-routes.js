const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, React } = require('../../models');
const withAuth = require('../../utils/auth');

// get all posts
router.get('/', withAuth, (req, res) => {
  Post.findAll({
    order: ['created_at', 'DESC'],
    attributes: [
      'id',
      'title',
      'created_at',
      'post_url',
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
      if (!postData) {
        res.status(404).json({ message: 'No posts found' })
      }
      res.json(postData)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

// get 1 post by id
router.get('/:id', (req, res) => {
  Post.findOne({
    where: { id: req.params.id },
    attributes: [
      'id',
      'title',
      'created_at',
      'post_url',
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
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(postData);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
})

// create post
router.post('/', withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    post_url: req.body.post_url,
    post_body: req.body.post_body,
    user_id: req.session.user_id
  })
    .then(postData => res.json(postData))
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

// update post by id
router.put('/:id', withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      post_url: req.body.post_url,
      post_body: req.body.post_body
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(postData => {
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(postData);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.put('/upreact', withAuth, (req, res) => {
  // custom static method created in models/Post.js
  Post.upreact({ ...req.body, user_id: req.session.user_id }, { React, Comment, User })
    .then(updatedReactData => res.json(updatedReactData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete post by id
router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(postData => {
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(postData);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = router;