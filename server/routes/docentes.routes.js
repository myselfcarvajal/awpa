import express from 'express';
import {getDocentes, getDocentesBasicData, getDocentesBasicDataById, getDocenteById, getPublicationsByDocenteId, createDocente, updateDocente, deleteDocente } from '../controllers/docentes.controller.js'
import { verifyAdmin, verifyUser} from '../utils/verifyToken.js'

const router = express.Router();

//GET ALL
router.get('/', getDocentes)

//GET ALL
router.get('/basic', getDocentesBasicData)

//GET
router.get('/:idDocente', getDocenteById)

//GET
router.get('/basic/:idDocente', getDocentesBasicDataById)

//GET
router.get('/:idDocente/publicaciones', getPublicationsByDocenteId)

//CREATE
router.post('/', verifyAdmin, createDocente)

//UPDATE
router.put('/:idDocente', verifyUser ,updateDocente)

//DELETE
router.delete('/:idDocente', verifyAdmin, deleteDocente)

export default router;
