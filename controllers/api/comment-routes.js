const router = require('express').Router();
const { Comment, User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

// get all comments - findAll()
// include user's username
router.get('/', (req, res) => {
    Comment.findAll({
      attributes: ['id', 'body', 'user_id', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Post,
                attributes: ['title', 'created_at']
            }
        ]
    })
      .then(commentData => res.json(commentData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// create new comment - create()
router.post('/', withAuth, (req, res) => {
    // check the session
    if (req.session) {
      Comment.create({
        body: req.body.body,
        post_id: req.body.post_id,
        user_id: req.session.user_id,
      })
        .then(commentData => res.json(commentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    }
  });

// delete post - destroy()
router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({ where: { id: req.params.id }})
      .then(commentData => {
        if (!commentData) {
          res.status(404).json({ message: 'No comment found with this id' });
          return;
        }
        res.json(commentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;