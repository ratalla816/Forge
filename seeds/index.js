const comments = require('./comment-seeds');
const users = require('./user-seeds');
const posts = require('./post-seeds');
const like = require('./like-seeds');

const sequelize = require('../config/connection');

const seed = async () => {
    await sequelize.sync({ force: true });
    await users();
    await posts();
    await comments();
    await like();

    process.exit(0);
};

seed();