const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'body', 'created_at'],
        include: {
            model: User,
            attributes: ['username']
        }
    }).then(postData => {
        const posts = postData.map(post => post.get({ plain: true }));
        res.render('homepage', { posts });
    }).catch(err => res.status(500).json(err));
});

// // get all posts for splashpage and render
// router.get('/', (req, res) => {

//  res.render('splashpage')
// });

// get homepage and render
router.get('/homepage', (req, res) => {
res.render('homepage', posts)
});

// get single post for single post page
router.get('/post/:id', (req, res) => {
  
});

// get login page and single user info and render
router.get('/login', (req, res) => {
  
});

module.exports = router;