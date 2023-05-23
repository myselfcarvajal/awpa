import { uploadFile } from '../s3.js'
import { Publicacion } from '../models/Publicacion.js'

// const mysqlConnection = require('../database');
// import * as s from '../database.js'

export const getPublicaciones = async (req, res, next) => {
    try {
        const publicaciones = await Publicacion.findAll();
        res.status(200).json(publicaciones);
    } catch (err) {
        next(err);
    }
};

export const getPublicacionByid = async (req, res, next) => {
    try {
        const { idPublicacion } = req.params;

        const pub = await Publicacion.findOne({
            where: {
                idPublicacion,
            },
        });
        res.status(200).json(pub);
    } catch (err) {
        next(err);
    }
};

export const createPublicacion = async (req, res, next) => {
    try {
       

        const {
            tituloPublicacion,
            autor,
            descripcionPub,
        } = req.body;

        // const result = await uploadFile(req.files.file) a    bilitar luego

        const file_name = req.files.file.name
        const awsUrl = 'https://awpa-aws.s3.amazonaws.com/'

        const urlPublicacion = awsUrl + file_name
        const idDocente = req.user.id

        const newPublicacion = await Publicacion.create({
            tituloPublicacion: tituloPublicacion,
            autor: autor,
            descripcionPub: descripcionPub,
            urlPublicacion: urlPublicacion,
            idDocente: idDocente,
        })

        res.status(200).json(newPublicacion)
    } catch (err) {
        next(err);
    }
};

export const updatePublicacion = async (req, res, next) => {
    const { idPublicacion } = req.params;

    try {
        const {
            tituloPublicacion,
            autor,
            descripcionPub,
        } = req.body;

        const publicacionFound = await Publicacion.findByPk(idPublicacion);

        if (!publicacionFound) return res.status(409).json({
            'status': 404,
            'message': 'Publicaction Not found',
        })

        // const result = await uploadFile(req.files.file) a    bilitar luego

        const file_name = req.files.file.name
        const awsUrl = 'https://awpa-aws.s3.amazonaws.com/'

        const urlPublicacion = awsUrl + file_name

        const updatePublicacion = await Publicacion.update({
            idPublicacion,
            tituloPublicacion,
            autor,
            descripcionPub,
            urlPublicacion,
        }, {
            where: {
                idPublicacion: idPublicacion,
            }
        });

        res.status(204).json(updatePublicacion)
    } catch (err) {
        next(err);
    }
};

export const deletePublicacion = async (req, res, next) => {
    try {
        const { idPublicacion } = req.params;

        const publicacionFound = await Publicacion.findByPk(idPublicacion);

        if (!publicacionFound) return res.status(409).json({
            'status': 404,
            'message': 'Publication Not found',
        })

        await Publicacion.destroy({
            where: {
                idPublicacion: idPublicacion,
            },
        });

        res.status(200).json({
            'status': 200,
            'message': 'Publication has been deleted.',
        })

    } catch (err) {
        next(err)
    }
};
