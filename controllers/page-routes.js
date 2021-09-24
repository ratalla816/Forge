const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// get all posts for splashpage and render
router.get('/', (req, res) => {

 res.render('splashpage')
});

// get homepage and render
router.get('/homepage', (req, res) => {
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
      }).then(postData => {
        const posts = postData.map(post => post.get({ plain: true }));
        res.render('homepage', { posts });
    }).catch(error => res.status(500).json(error));
});

// get single post for single post page
router.get('/post/:id', (req, res) => {
  
});

// get login page and single user info and render
router.get('/login', (req, res) => {
  
});

module.exports = router;