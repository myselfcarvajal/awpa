import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import {Publicacion} from './Publicacion.js'
import bcrypt from 'bcryptjs'

export const Docente = sequelize.define('docentes',
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
            defaultValue: false,
            allowNull: false
        },
    }, {
        timestamps: false,
    }
);

// Docente.hasMany(Publicacion, {as: "publicaciones", foreignKey: "autorId"});

// Publicacion.belongsTo(Docente, {as: "autor"});

Docente.hasMany(Publicacion, {
    foreignKey: 'idDocente',
    sourcekey: 'id'
})

Publicacion.belongsTo(Docente, {
    foreignKey: 'idDocente',
    target: 'id'
})
