import { Facultad } from '../models/Facultad.js'
import { Docente } from '../models/Docente.js'
import sequelize from 'sequelize'

export const getFacultades = async (req, res, next) => {
    try {
        const facultades = await Facultad.findAll({
            include: {
                model: Docente,
                attributes: [
                    [sequelize.fn('CONCAT', sequelize.col('nombre'), ' ', sequelize.col('apellido')), 'fullName'],
                    'email',
                ],
            }
        });
        res.status(200).json(facultades);
    } catch (err) {
        next(err);
    }
};

export const getFacultadById = async (req, res, next) => {
    try {
        const { idFacultad } = req.params;

        const facultad = await Facultad.findOne({
            include: {
                model: Docente,
                attributes: [
                    [sequelize.fn('CONCAT', sequelize.col('nombre'), ' ', sequelize.col('apellido')), 'fullName'],
                    'email',
                ],
            },
            where: {
                codigoFacultad: idFacultad,
            },
        });

        if (!facultad) {
            return res.status(404).json({
                'status': 404,
                'message': 'Facultad not found'
            });
        }

        res.status(200).json(facultad);
    } catch (err) {
        next(err);
    }
};

export const createFacultad = async (req, res, next) => {
    try {

        const { codigoFacultad, nombreFacultad } = req.body;

        const facultadFound = await Facultad.findByPk(codigoFacultad);

        if (facultadFound) return res.status(409).json({
            'status': 409,
            'message': 'Facultad has already been created',
        })

        let newfacultad = await Facultad.create({
            codigoFacultad,
            nombreFacultad
        })

        res.status(200).json(newfacultad)
    } catch (err) {
        next(err);
    }
};

export const updateFacultad = async (req, res, next) => {
    try {
        const { idFacultad } = req.params;

        const { codigoFacultad, nombreFacultad } = req.body;

        const facultadFound = await Facultad.findByPk(idFacultad);

        if (!facultadFound) return res.status(409).json({
            'status': 404,
            'message': 'Facultad Not found',
        })

        const facultad = await Facultad.update({
            codigoFacultad,
            nombreFacultad
        }, {
            where: {
                codigoFacultad: idFacultad,
            }
        });
        console.log(facultad)

        res.status(204).json()
    } catch (err) {
        next(err);
    }
};

export const deleteFacultad = async (req, res ,next) => {
    try {
        const { idFacultad } = req.params;

        const facultadFound = await Facultad.findByPk(idFacultad);

        if (!facultadFound) return res.status(409).json({
            'status': 404,
            'message': 'Facultad Not found',
        })


        await Facultad.destroy({
            where: {
                codigoFacultad: idFacultad,
            },
        });


        res.status(200).json({
            'status': 200,
            'message': 'Facultad has been deleted.',
        })

    } catch (err) {
        next(err)
    }
};
