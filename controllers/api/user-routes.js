// finalized 09/23/21, 9:00pm - audry
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');


// /api/users/ - get all users - findAll()
// tested 09/23/21, 8:25pm (works)
router.get('/', (req, res) => {
  User.findAll({ attributes: { exclude: ['password'] } })
    .then(userData => {
      if (!userData) {
        res.status(404).json({ message: 'No users found' });
        return;
      }
      res.json(userData)
    })
    .catch(error => res.status(500).json(error))
});

// /api/users/1 - get one user by id - findOne()
// tested 09/23/21, 8:45pm (works)
router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: { id: req.params.id },
    include: [
      {
        model: Post,
        attributes: ['id', 'title', 'url', 'body', 'created_at']
      },
      {
        model: Comment,
        attributes: ['id', 'body', 'created_at'],
        include: { model: Post, attributes: ['title'] }
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
    .catch(error => res.status(500).json(error))
});

// /api/users/ - create user - create()
// tested 09/23/21, 8:20pm (works)
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

// /api/users/login - user login - findOne()
// tested 09/23/21, 8:30pm (WORKING)
router.post('/login', (req, res) => {
  User.findOne({ where: { username: req.body.username } })
    .then(userData => {
      if (!userData) {
        res.status(404).json({ message: 'Username not found' });
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

        res.json({ user: userData, message: 'Login successful' });
      });
    })
    .catch(error => res.status(500).json(error));
});

// /api/users/ - logout route findOne()
// tested with insomnia 09/23/21, 8:30pm (works), gives 204 success message
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// /api/users/1 - delete user by id - destroy()
// tested - 9/23/21, 8:35pm (works)
router.delete('/:id', (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then(userData => {
      if (!userData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(userData);
    })
    .catch(error => res.status(500).json(error));
});

module.exports = router;