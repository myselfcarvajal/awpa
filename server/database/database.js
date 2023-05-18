import Sequelize from 'sequelize'
import {database, username, password } from '../config.js'

export const sequelize = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect: 'mysql'
});
