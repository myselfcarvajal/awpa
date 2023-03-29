import { Docente } from '../models/Docente.js'

export const getDocentes = async (req, res, next) => {
    try {
        const docentes = await Docente.findAll();
        res.status(200).json(docentes);
    } catch (err) {
        next(err);
    }
};

export const getDocenteById = async (req, res, next) => {
    try {
        const { idDocente } = req.params;

        const docente = await Docente.findOne({
            where: {
                id: idDocente,
            },
        });
        res.status(200).json(docente);
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

        let newAdmin = await Docente.create({
            id,
            nombreUsuario,
            passwd,
            email,
            nombre,
            apellido,
            isAdmin,
            idFacultad
        })

        res.status(200).json(newAdmin)
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
