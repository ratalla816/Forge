// completed 09/22/21, 7:10pm (audry)

const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// get all users - findAll()
// tested 09/22/21, 6:45pm (works)
router.get('/', (req, res) => {
  User.findAll({ attributes: { exclude: ['password'] } })
    .then(userData => {
      if (!userData) {
        res.status(404).json({ message: 'No users found' });
        return;
      }
      res.json(userData)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    })
});

// get one user by id - findOne()
// tested 09/22/21, 6:45pm (works)
router.get('/:id', (req, res) => {
  User.findOne({
    where: { id: req.params.id },
    attributes: { exclude: ['password'] },
    include: [
      {
        model: Post,
        attributes: ['id', 'title', 'url', 'body', 'created_at']
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
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    })
});

// create user - create()
// tested 09/22/21, 6:45pm (works)
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
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

// user login - findOne()
// tested 09/22/21, 7:00pm (NOT WORKING)
router.post('/login', (req, res) => {
  User.findOne({ where: { username: req.body.username } })
    .then(userData => {
      if (!userData) {
        res.status(404).json({ message: 'Username address not found' });
        return;
      }

      const isPassword = userData.validatePassword(req.body.password);
      if (!isPassword) {
        res.status(404).json({ message: 'Password is incorrect' });
        return;
      }
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.loggedIn = true;

        res.json({ user: userData, message: 'Log in success' });
      });
    });
});

// logout route findOne()
// not tested, unsure how to test with out using button (maybe create a test)
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// DELETE user by id - destroy()
// tested - 9/22/21, 6:45pm (works)
router.delete('/:id', (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then(userData => {
      if (!userData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(userData);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = router;