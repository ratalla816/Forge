// const router = require("express").Router();
// const sequelize = require("../config/connection");
// const { User } = require("../models");
// const withAuth = require("../utils/auth");

// // get all users for admin
// router.get("/", withAuth, (req, res) => {
//   User.findAll({
//     where: { id: req.session.id },
//     attributes: ["id", "name", "username", "email", "password"]
//   })
//     .then((userData) => {
//       const users = userData.map((user) => user.get({ plain: true }));
//       res.render("profilepage", {
//         users,
//         loggedIn: true,
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//       res.status(500).json(error);
//     });
// });

// router.get("/:id", (req, res) => {
//   User.findOne({
//     where: { id: req.params.id },
//     attributes: ["id", "name", "username", "email", "password"],
//   })
//     .then((userData) => {
//       if (!userData) {
//         res.status(404).json({ message: "No user found with this id" });
//         return;
//       }
//       res.json(userData);
//     })
//     .catch((error) => {
//       console.log(error);
//       res.status(500).json(error);
//     });
// });

// router.get("/edit/:id", withAuth, (req, res) => {
//   User.findOne({
//     where: { id: req.params.id },
//     attributes: ["id", "name", "username", "email", "password"]
//   })
//     .then((userData) => {
//       if (userData) {
//         const user = userData.get({ plain: true });

//         res.render('edit-user', {
//           user,
//           loggedIn: true,
//         });
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//       res.status(500).json(error);
//     });
// });

// module.exports = router;





const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  User.findAll({
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

// router.get('/user/:id', (req, res) => {
//   User.findOne({
//     where: {
//       id: req.params.id
//     },
//     attributes: [
//       'id',
//       'name',
//       'username',
//       'email',
//       'password',
//     ]
//   })
//     .then(userData => {
//       if (!userData) {
//         res.status(404).json({ message: 'No user found with this id' });
//         return;
//       }

//       const user = userData.map(user => user.get({ plain: true }));

//       res.render('profilepage', {
//         user,
//         loggedIn: req.session.loggedIn
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });


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