import { Administrador } from '../models/Administrador.js'

export const getAdmins = async (req, res, next) => {
    try {
        const admins = await Administrador.findAll();
        res.status(200).json(admins);
    } catch (err) {
        next(err);
    }
};

export const getAdminById = async (req, res, next) => {
    try {
        const { idAdmin } = req.params;

        const admin = await Administrador.findOne({
            where: {
                id: idAdmin,
            },
        });
        res.status(200).json(admin);
    } catch (err) {
        next(err);
    }
};

export const createAdmin = async (req, res, next) => {
    try {

        const { id, nombreUsuario, passwd, email, nombre, apellido, isAdmin } = req.body;

        const userFound = await Administrador.findByPk(id);

        if (userFound) return res.status(409).json({
            'status': 409,
            'message': 'User has already been created',
        })

        let newAdmin = await Administrador.create({
            id,
            nombreUsuario,
            passwd,
            email,
            nombre,
            apellido,
            isAdmin,
        })

        res.status(200).json(newAdmin)
    } catch (err) {
        next(err);
    }
};

export const updateAdmin = async (req, res, next) => {
    try {
        const { idAdmin } = req.params

        const { id, nombreUsuario, passwd, email, nombre, apellido, isAdmin } = req.body;

        const userFound = await Administrador.findByPk(idAdmin);

        if (!userFound) return res.status(409).json({
            'status': 404,
            'message': 'User Not found',
        })

        const admin = await Administrador.update({
            nombreUsuario,
            passwd,
            email,
            nombre,
            apellido,
            isAdmin,
        }, {
            where: {
                id: idAdmin,
            }
        });

        res.status(204).json(admin)
    } catch (err) {
        next(err);
    }
};

export const deleteAdmin = async (req, res, next) => {
    try {
        const { idAdmin } = req.params

        const userFound = await Administrador.findByPk(idAdmin);

        if (!userFound) return res.status(409).json({
            'status': 404,
            'message': 'User Not found',
        })


        await Administrador.destroy({
            where: {
                id: idAdmin,
            },
        });


        res.status(200).json({
            'status': 200,
            'message': 'Admin has been deleted.',
        })

    } catch (err) {
        next(err)
    }
};
