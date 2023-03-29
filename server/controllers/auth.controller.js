import { Docente } from '../models/Docente.js'
import { Administrador } from '../models/Administrador.js'
import {createError} from '../utils/error.js'
import {SECRET} from '../config.js'
import jwt from 'jsonwebtoken'

export const login = async (req, res, next) => {
    try {
        const user = await Docente.findOne({ where: {nombreUsuario : req.body.nombreUsuario }})

        if (!user) return next(createError(404,"User not found!"))

        let isPasswordCorrect = false

        if (req.body.passwd === user.passwd) {
            isPasswordCorrect=true
        }

        if (isPasswordCorrect === false) return next(createError(400, "Wrong password or username!"));
    
        // CREATE TOKEN
        const token = jwt.sign({ id: user.id, nombreUsuario: user.nombreUsuario, email: user.email, isAdmin: user.isAdmin }, SECRET);

        const { passwd, ...otherDetails } = user.dataValues;
        res
            .cookie("access_token", token, {
            httpOnly: true,
        })
        .status(200)
        .json({ details: { ...otherDetails } });
    } catch (error) {
        next(err);
    }
};

export const adminlogin = async (req, res, next) => {
    try {
        const user = await Administrador.findOne({ where: {nombreUsuario : req.body.nombreUsuario }})

        if (!user) return next(createError(404,"User not found!"))

        let isPasswordCorrect = false

        if (req.body.passwd === user.passwd) {
            isPasswordCorrect=true
        }

        if (isPasswordCorrect === false) return next(createError(400, "Wrong password or username!"));

        // CREATE TOKEN
        const token = jwt.sign({ id: user.id, nombreUsuario: user.nombreUsuario, email: user.email, isAdmin: user.isAdmin }, SECRET);

        const { passwd, ...otherDetails } = user.dataValues;
        res
            .cookie("access_token", token, {
            httpOnly: true,
        })
        .status(200)
        .json({ details: { ...otherDetails } });
    } catch (err) {
        next(err);
    }
};
