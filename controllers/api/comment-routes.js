const router = require('express').Router();
const { Comment } = require('../../models');

// get all comments - findAll()
// include user's username
router.get('/', (req, res) => {
  
});

// create new comment - create()
router.post('/', (req, res) => {
  
});

// delete post - destroy()
router.delete('/:id', (req, res) => {
  
});

module.exports = router;