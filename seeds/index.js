const comments = require('./comment-seeds');
const users = require('./user-seeds');
const posts = require('./post-seeds');
const reactions = require('./reaction-seeds');


const sequelize = require('../config/connection');

const seed = async () => {
    await sequelize.sync({ force: true });
    console.log('-- INSTALLING SEEDS --');

    await users();
    console.log('-- UPDATING USERS --');

    await posts();
    console.log('-- UPDATING POSTS --');

    await comments();
    console.log('-- UPDATING COMMENTS --');

    await reactions();
    console.log('-- UPDATING REACTIONS --');

    process.exit(0);
};

seed();