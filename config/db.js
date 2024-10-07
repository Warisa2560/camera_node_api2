const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});
//const sequelize = new Sequelize('camer_db', 'postgres', '12345678', {
   // host: 'localhost',
    //dialect: 'postgres',
//});
module.exports = sequelize;