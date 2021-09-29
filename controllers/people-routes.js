const router = require('express').Router();
const {User} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  User.findAll({
    attributes: [
      'id',
      'name',
      'username',
    ],
  })
  .then(userData => {
    const users = userData.map(user => user.get({ plain: true }));

    res.render('userspage', {
      layout: 'main',
      users,
      loggedIn: req.session.loggedIn
    });
  })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.get('/:id', (req, res) => {
  User.findOne({
    where: { id: req.params.id },
    attributes: [
      'id',
      'name',
      'username',
    ]
  })
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
})

module.exports = router;