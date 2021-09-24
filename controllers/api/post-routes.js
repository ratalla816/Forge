const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');

// get all posts - findAll()
// include user's username and comments with user's username
// tested 09/22/21, 8:51pm (works)
router.get('/', (req, res) => {
  Post.findAll({
    order: [['created_at', 'DESC']],
    attributes: ['id', 'title', 'url', 'body', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Comment,
        attributes: ['id', 'body'],
        indlude: {
          model: User,
          attributes: ['username']
        }
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
    .catch(error => {
      console.log(error);
      res.status(500).json(error)
    })
});

// get single post by id - findOne()
// include user's username and comments with user's username
router.get('/:id', (req, res) => {

});

// create post - create()
// tested 09/22/21, 9:00pm (works)
router.post('/', (req, res) => {
  Post.create({
    user_id: req.session.user_id,
    url: req.body.url,
    title: req.body.title,
    body: req.body.body
  })
    .then(postData => res.json(postData))
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

// delete post - destroy()
// tested 09/22/21, 9:05pm (NOT WORKING)
router.delete('/:id', (req, res) => {
  Post.destroy({ where: { id: req.body.id } })
    .then(postData => {
      if (!postData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(postData)
    })
    .catch(error => {
      console.log(error);
      res.status(500);
    });
});

module.exports = router;