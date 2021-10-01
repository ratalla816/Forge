const { User } = require('../models');

const userSeeds = [
    {
        name: 'Audry Ford',
        username: 'audry19',
        email: 'audry@email.com',
        password: 'password'
    },
    {
        name: 'Derimar Gray',
        username: 'derimarg',
        email: 'derimarg@email.com',
        password: 'password'
    },
    {
        name: 'Rob Atalla',
        username: 'rob33',
        email: 'rob@email.com',
        password: 'password'
    },
    {
        name: 'Cody Mck',
        username: 'cody10',
        email: 'cody@email.com',
        password: 'password'
    },
    {
        name: 'Charlie Brown',
        username: 'charlie19',
        email: 'charlie@email.com',
        password: 'password'
    },
    {
        name: 'Kimberly Lozaya',
        username: 'kimberly76',
        email: 'kim@email.com',
        password: 'password'
    },
    {
        name: 'Shannon Twoll',
        username: 'shannon21',
        email: 'shannon@email.com',
        password: 'password'
    },
    {
        name: 'Jim Lopez',
        username: 'jim16',
        email: 'jim@email.com',
        password: 'password'
    }
];

const users = () => User.bulkCreate(userSeeds, {individualHooks: true});

module.exports = users;