import express from 'express';
import {getDocentes, getDocenteById, createDocente, updateDocente, deleteDocente } from '../controllers/docentes.controller.js'
import { verifyAdmin, verifyUser} from '../utils/verifyToken.js'

const router = express.Router();

//GET ALL
router.get('/', getDocentes)

//GET
router.get('/:idDocente', getDocenteById)

//CREATE
router.post('/', verifyAdmin, createDocente)

//UPDATE
router.put('/:idDocente', verifyUser ,updateDocente)

//DELETE
router.delete('/:idDocente', verifyAdmin, deleteDocente)

export default router;
