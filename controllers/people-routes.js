const router = require('express').Router();
// const sequelize = require('../config/connection');
const { User } = require('../models');
const withAuth = require('../utils/auth');


// get all userss for userspage
router.get('/', (req, res) => {
  console.log(req.session);
  console.log('======================');
  User.findAll({
    attributes: [
      'id',
      'name',
      'username',
      'created_at',
    ],
    order: ['created_at']
  })
    .then(userData =>
      
      res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single user
router.get('/user/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'name',
      'username',
      'created_at'
    ],
  })
    .then(userData => {
      if (!userData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }

      const user = userData.get({ plain: true });

      res.render('single-user', {
        user,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.put('/:id', withAuth, (req, res) => {
  User.update(
    {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email, 
      password: req.body.password
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(userData => {
      if (!userData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(userData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(userData => {
      if (!userData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(userData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;