const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');

// get all posts - findAll()
// include user's username and comments with user's username
router.get('/', (req, res) => {

});

// get single post by id - findOne()
// include user's username and comments with user's username
// tested 09/23/21, 1:00pm (works)
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
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(postData)
  })
  .catch(error => {
    console.log(error);
    res.status(500).json(error)
  });


// create post - create()
// tested 09/23/21, 1:00pm (works)
router.post('/', (req, res) => {
  Post.create({
    user_id: req.body.user_id,
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
// tested 09/23/21, 1:00pm (WORKS)
router.delete('/:id', (req, res) => {
  Post.destroy({ where: { id: req.params.id } })
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