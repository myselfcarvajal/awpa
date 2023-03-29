import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Administrador = sequelize.define('administradores',
    {   

        id: {
            type: DataTypes.STRING(12),
            primaryKey: true,
            allowNull: false,
        },
        nombreUsuario: {
            type: DataTypes.STRING(30),
            unique: true,
            allowNull: false
        },
        passwd: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(256),
            allowNull: false,
            unique: true,
        },
        nombre: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING(45),
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
            
        },
    },
    {
        timestamps: false,
    }
);
