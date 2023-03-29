import { DataTypes, Sequelize } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Publicacion = sequelize.define('publicaciones',
    {
        idPublicacion: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        tituloPublicacion: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        autor: {
            type: DataTypes.STRING,
        },
        descripcionPub: {
            type: DataTypes.TEXT,
        },
        urlPublicacion: {
            type: DataTypes.STRING,
        },
        fechaPublicacion: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
    },
    {
        timestamps: false,
        initialAutoIncrement: 1000,
    }
);
