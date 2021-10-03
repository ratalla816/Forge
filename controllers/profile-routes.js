const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  
  User.findAll({
        where: { username: req.session.username },
    attributes: [
      'id',
      'name',
      'username',
      'email',
      'password',
    ],
  })
  .then(userData => {
    const users = userData.map(user => user.get({ plain: true }));

    res.render('profilepage', {
      users,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(error => {
    console.log(error);
    res.status(500).json(error);
  });
});

router.get('/edit/:id', withAuth, (req, res) => {
  User.findByPk(req.params.id, {
    attributes: [
      'id',
      'name',
      'username',
      'email',
      'password'
    ]
  })
    .then(userData => {
      if (userData) {
        const user = userData.get({ plain: true });
        
        res.render('edit-profile', {
          user,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
module.exports = router;