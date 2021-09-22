const seed_name = require('./'); // Add directory of seeds and add a const name

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await x(); // add function to seed change x to some name
    console.log('\n----- comment -----\n');
  
    process.exit(0);
  };
  
  seedAll();