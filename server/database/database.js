import Sequelize from 'sequelize'
import {database, username, password } from '../config.js'

export const sequelize = new Sequelize('awpa_database', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
});
