const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');

// get all posts - findAll()
// include user's username and comments with user's username
router.get('/', (req, res) => {
  
});

// get single post by id - findOne()
// include user's username and comments with user's username
router.get('/:id', (req, res) => {
  
});

// create post - create()
router.post('/', (req, res) => {
  
});

// delete post - destroy()
router.delete('/:id', (req, res) => {
  
});

module.exports = router;