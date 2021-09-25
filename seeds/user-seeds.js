const { User } = require('../models');

const userSeeds = [
    {
        username: 'audry19',
        email: 'audry@email.com',
        password: 'password'
    },
    {
        username: 'derimar89',
        email: 'derimar@email.com',
        password: 'password'
    },
    {
        username: 'rob33',
        email: 'rob@email.com',
        password: 'password'
    },
    {
        username: 'cody10',
        email: 'cody@email.com',
        password: 'password'
    },
    {
        username: 'charlie19',
        email: 'charlie@email.com',
        password: 'password'
    },
    {
        username: 'kimberly76',
        email: 'kim@email.com',
        password: 'password'
    },
    {
        username: 'shannon21',
        email: 'shannon@email.com',
        password: 'password'
    },
    {
        username: 'jim16',
        email: 'jim@email.com',
        password: 'password'
    }
];

const users = () => User.bulkCreate(userSeeds, {individualHooks: true});

module.exports = users;