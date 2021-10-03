const router = require('express').Router();
const { Post, User, Comment, Likes } = require('../models');
const sequelize = require('../config/connection');


// get all posts for reviewpage
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'created_at',
            'post_body',
            'post_url',
            [sequelize.literal('(SELECT COUNT(*) FROM likes WHERE post.id = likes.post_id)'), 'likes_count']
        ],
        include: [
            {
                model: User,
                attributes: ['name', 'username']
            },
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_body',
                    'post_id',
                    'user_id',
                    'created_at'
                ],
                include: {
                    model: User,
                    attributes: ['name', 'username']
                }
            }
        ]
    })
        .then(postData => {
            const posts = postData.map(post => post.get({ plain: true }));

            res.render('reviewpage', {
                layout: 'review',
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(error);
        });
});

// get single post
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: { id: req.params.id },
        attributes: [
            'id',
            'title',
            'created_at',
            'post_body',
            'post_url'
        ],
        include: [
            {
                model: User,
                attributes: ['name', 'username']
            },
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_body',
                    'post_id',
                    'user_id',
                    'created_at'
                ],
                include: {
                    model: User,
                    attributes: ['name', 'username']
                }
            }
        ]
    })
        .then(postData => {
            if (!postData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            const post = postData.get({ plain: true });

            res.render('single-post-review', {
                layout: 'review',
                post,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(error);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('loginpage',
        {
            layout: 'signinup'
        });
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

module.exports = router;