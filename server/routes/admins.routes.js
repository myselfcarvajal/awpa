import express from 'express';
import { getAdmins, getAdminById, createAdmin, updateAdmin, deleteAdmin } from '../controllers/admins.controller.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router();

//GET ALL
router.get('/', verifyAdmin, getAdmins)

//GET
router.get('/:idAdmin', verifyAdmin, getAdminById)

//CREATE
router.post('/', verifyAdmin, createAdmin)

//UPDATE
router.put('/:idAdmin', verifyAdmin, updateAdmin)

//DELETE
router.delete('/:idAdmin', verifyAdmin, deleteAdmin)

export default router;
