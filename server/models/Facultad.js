import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import {Docente} from './Docente.js'

export const Facultad = sequelize.define('facultades',
    {   

        codigoFacultad  : {
            type: DataTypes.STRING(20),
            primaryKey: true,
            allowNull: false
        },
        nombreFacultad: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
    },
    {
        timestamps: false,
        onDelete: null
    }
);


Facultad.hasMany(Docente, {
    foreignKey: 'idFacultad',
    sourcekey: 'CodigoFacultad'
})

Docente.belongsTo(Facultad, {
    foreignKey: 'idFacultad',
    target: 'CodigoFacultad'
})
