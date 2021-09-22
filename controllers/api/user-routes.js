const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// get all users - findAll()
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(userData => {
      if (!userData) {
        res.status(404).json({ message: 'No users found' });
        return;
      }
      res.json(userData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// get one user by id - findOne()
router.get('/:id', (req, res) => {
  User.findOne({
    where: { id: req.params.id },
    attributes: { exclude: ['password'] },
    include: [
      {
        model: Post,
        attributes: ['id', 'title', 'post_url', 'post_body', 'created_at']
      }
    ]
  })
    .then(userData => {
      if (!userData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(userData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// create user - create()
router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
  .then(userData => {
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.json(userData);
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/login', (req, res) => {

});

router.post('/logout', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;