const router = require('express').Router();
const { Comment } = require('../../models');

// /api/comments/ - get all comments - findAll()
// include user's username
// tested 09/23/21, 9:00pm (NOT WORKING)
router.get('/', (req, res) => {
    Comment.findAll({
        attributes: ['id', 'body', 'user_id', 'created_at'],
        // THE ISSUE IS HERE - SOMETHING TO DO WITH THE ASSOCIATIONS I THINK - ROUTE WORKS IN THIS STATE 9/23/21, 9:15pm
        // include: [
        //     {
        //         model: 'user',
        //         attributes: ['username']
        //     },
        //     {
        //         model: 'post',
        //         attributes: ['title', 'created_at']
        //     }
        // ]
    })
        .then(commentData => {
            if (!commentData) {
                res.status(404).json({ message: 'No comments found' });
                return;
            }
            res.json(commentData);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(error);
        })
});

// /api/comments/1 - get one comment - findOne()
// include user's username and post title
// tested 09/23/21, 9:00pm (NOT WORKING)
router.get('/:id', (req, res) => {
    Comment.findOne({
        where: { id: req.params.id },
        attributes: ['id', 'body', 'user_id', 'created_at'],
        // THE ISSUE IS HERE - SOMETHING TO DO WITH THE ASSOCIATIONS I THINK - ROUTE WORKS IN THIS STATE 9/23/21, 9:15pm
        // include: [
        //     {
        //         model: 'user',
        //         attributes: ['username']
        //     },
        //     {
        //         model: 'post',
        //         attributes: 'title'
        //     }
        // ]
    })
        .then(commentData => {
            if (!commentData) {
                res.status(404).json({ message: 'No comment found with this id' });
                return;
            }
            res.json(commentData);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(error);
        })
});


// create new comment - create()
// include user's username and post title
// tested 09/23/21, 2:00pm (works)
router.post('/', (req, res) => {
    Comment.create({
        post_id: req.body.post_id,
        user_id: req.body.user_id,
        body: req.body.body
    })
        .then(commentData => res.json(commentData))
        .catch(error => {
            console.log(error);
            res.status(500).json(error);
        })
});

// /api/comments/1 - delete post - destroy()
// include user's username
// tested 09/23/21, 9:00pm (works)
router.delete('/:id', (req, res) => {
    Comment.destroy({ where: { id: req.params.id } })
        .then(commentData => {
            if (!commentData) {
                res.status(404).json({ message: 'No comment found with this id' });
                return;
            }
            res.json(commentData)
        })
        .catch(error => res.status(500).json(error))
});

module.exports = router;