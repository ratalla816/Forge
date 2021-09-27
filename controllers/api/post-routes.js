// finalized 09/23/21, 9:00pm - audry
const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// /api/posts/ - get all posts - findAll()
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
    .catch(error => res.status(500).json(error))
});

// /api/posts/1 - get single post by id - findOne()
// include user's username and comments with user's username
// tested 09/23/21, 1:00pm (works)
router.get('/:id', (req, res) => {
  Post.findOne({
    where: { id: req.params.id },
    attributes: ['id', 'title', 'url', 'body', 'user_id', 'created_at'],
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
      res.json(postData)
    })
    .catch(error => res.status(500).json(error))
})


// /api/posts/ - create post - create()
// tested 09/23/21, 1:00pm (works)
router.post('/', (req, res) => {
  Post.create({
    user_id: req.body.user_id,
    url: req.body.url,
    title: req.body.title,
    body: req.body.body
  })
    .then(postData => res.json(postData))
    .catch(error => res.status(500).json(error));
});

// /api/posts/1 - delete post - destroy()
// tested 09/23/21, 1:00pm (WORKS)
router.delete('/:id', (req, res) => {
  Post.destroy({ where: { id: req.params.id } })
    .then(postData => {
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(postData)
    })
    .catch(error => res.status(500).json(error));
});

module.exports = router;