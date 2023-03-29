import express from 'express';
import {getFacultades, 
    getFacultadById,
    createFacultad,
    updateFacultad,
    deleteFacultad  
} from '../controllers/facultades.controller.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router();

//GET ALL
router.get('/', getFacultades)

//GET
router.get('/:idFacultad', getFacultadById)

//CREATE
router.post('/', verifyAdmin, createFacultad)

//UPDATE
router.put('/:idFacultad', verifyAdmin, updateFacultad)

//DELETE
router.delete('/:idFacultad', verifyAdmin, deleteFacultad)

export default router;
