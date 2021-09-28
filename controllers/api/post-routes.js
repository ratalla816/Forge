const router = require('express').Router();
// const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Post.findAll({
    attributes: [
      'id',
      'title',
      'created_at',
      'post_url',
      'post_body'
    ],
    order: ['created_at', 'DESC'],
    include: [
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
      },
      {
        model: User,
        attributes: ['name', 'username']
      }
    ]
  })
    .then(postData =>
      res.json(postData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'created_at',
      'post_url',
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
})

router.post('/', withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    post_url: req.body.post_url,
    post_body: req.body.post_body,
    user_id: req.session.user_id
  })
    .then(postData => res.json(postData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


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
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

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
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;