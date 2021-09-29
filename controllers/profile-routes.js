const router = require('express').Router();
// const sequelize = require('../config/connection');
const { User } = require('../models');
const withAuth = require('../utils/auth');

// get all users for admin
router.get('/', withAuth, (req, res) => {
    User.findAll({
        where: { id: req.session.id },
        attributes: [
            'id',
            'name',
            'username',
            'email',
            'password',
        ]
    })
        .then(userData => {
            const users = userData.map(user => user.get({ plain: true }));
            res.render('profilepage',
                {
                    users,
                    loggedIn: true
                });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(error);
        });
});

router.get('/edit/:id', withAuth, (req, res) => {
    User.findOne({
        where: { id: req.params.id },
        attributes: [
            'id',
            'name',
            'username',
            'email',
            'password',
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
        .catch(error => {
            console.log(error);
            res.status(500).json(error);
        });
});

module.exports = router;