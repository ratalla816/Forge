const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all comments
router.get('/', withAuth, (req, res) => {
  Comment.findAll({})
    .then(commentData => {
      if (!commentData) {
        res.status(404).json({ message: 'No comments found' });
        return;
      }
      res.json(commentData)
    })
    .catch(error => {
      console.log(error);
      res.status(400).json(error);
    });
})

// create comment
router.post('/', withAuth, (req, res) => {
  // check session
  if (req.session) {
    Comment.create({
      comment_body: req.body.comment_body,
      post_id: req.body.post_id,
      user_id: req.session.user_id
    })
      .then(commentData => res.json(commentData))
      .catch(error => {
        console.log(error);
        res.status(400).json(error);
      });
  }
});

// delete comment
router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(commentData => {
      if (!commentData) {
        res.status(404).json({ message: 'No comment found with this id' });
        return;
      }
      res.json(commentData);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = router;