import { Docente } from '../models/Docente.js'
import { Publicacion } from '../models/Publicacion.js'
import { Facultad } from '../models/Facultad.js'
import sequelize from 'sequelize'

export const getDocentes = async (req, res, next) => {
    try {
        const docentes = await Docente.findAll({
            //include: 'publicaciones',
            include: [
                {
                    model: Publicacion,
                    attributes: ['idPublicacion', 'tituloPublicacion', 'autor', 'descripcionPub', 'urlPublicacion', 'fechaPublicacion']
                },
                {
                    model: Facultad,
                    attributes: ['nombreFacultad', 'codigoFacultad']
                }
            ],
            attributes: [
                'id',
                'nombreUsuario',
                'email',
                [sequelize.fn('CONCAT', sequelize.col('nombre'), ' ', sequelize.col('apellido')), 'fullName']
            ],
        });
        res.status(200).json(docentes);
    } catch (err) {
        next(err);
    }
};

export const getDocenteById = async (req, res, next) => {
    try {
        const { idDocente } = req.params;

        const docente = await Docente.findOne({
            include: [
                {
                    model: Publicacion,
                    attributes: ['idPublicacion', 'tituloPublicacion', 'autor', 'descripcionPub', 'urlPublicacion', 'fechaPublicacion']
                },
                {
                    model: Facultad,
                    attributes: ['nombreFacultad', 'codigoFacultad']
                }
            ],
            attributes: [
                'id',
                'nombreUsuario',
                'email',
                [sequelize.fn('CONCAT', sequelize.col('nombre'), ' ', sequelize.col('apellido')), 'fullName']
            ],
            where: {
                id: idDocente,
            },
        });
        res.status(200).json(docente);
    } catch (err) {
        next(err);
    }
};

export const getPublicationsByDocenteId = async (req, res, next) => {
    try {

        const { idDocente } = req.params;

        const docente = await Docente.findByPk(idDocente);

        if (!docente) {
            // Manejar el caso cuando no se encuentra el docente con el id especificado
            return res.status(404).json({
                'status': 404,
                'message': 'Docente not found'
            });
        }

        const PublicationsByDocente = await docente.getPublicaciones();

        res.status(200).json(PublicationsByDocente);

    } catch (err) {
        next(err);
    }
};

export const createDocente = async (req, res, next) => {
    try {

        const { id, nombreUsuario, passwd, email, nombre, apellido, isAdmin, idFacultad } = req.body;

        const docenteFound = await Docente.findByPk(id);

        if (docenteFound) return res.status(409).json({
            'status': 409,
            'message': 'Docente has already been created',
        })

        let newDocente = await Docente.create({
            id,
            nombreUsuario,
            passwd,
            email,
            nombre,
            apellido,
            isAdmin,
            idFacultad
        })

        res.status(200).json(newDocente)
    } catch (err) {
        next(err);
    }
};

export const updateDocente = async (req, res, next) => {
    try {
        const { idDocente } = req.params

        const { id, nombreUsuario, passwd, email, nombre, apellido, isAdmin, idFacultad } = req.body;

        const docenteFound = await Docente.findByPk(idDocente);

        if (!docenteFound) return res.status(409).json({
            'status': 404,
            'message': 'Docente Not found',
        })

        const docente = await Docente.update({
            nombreUsuario,
            passwd,
            email,
            nombre,
            apellido,
            isAdmin,
            idFacultad,
        }, {
            where: {
                id: idDocente,
            }
        });

        res.status(204).json(docente)
    } catch (err) {
        next(err);
    }
};

export const deleteDocente = async (req, res, next) => {
    try {
        const { idDocente } = req.params

        const docenteFound = await Docente.findByPk(idDocente);

        if (!docenteFound) return res.status(409).json({
            'status': 404,
            'message': 'Docente Not found',
        })


        await Docente.destroy({
            where: {
                id: idDocente,
            },
        });


        res.status(200).json({
            'status': 200,
            'message': 'Docente has been deleted.',
        })

    } catch (err) {
        next(err)
    }
};
