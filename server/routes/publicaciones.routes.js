import express from 'express';
import { getPublicaciones ,getPublicacionByid, createPublicacion,updatePublicacion, deletePublicacion  } from "../controllers/publicaciones.controller.js";
import {verifyToken, verifyUser, verifyUserPub, verifyDocente} from '../utils/verifyToken.js'

const router = express.Router();

//GET ALL
router.get('/', getPublicaciones)

//GET
router.get('/:idPublicacion', getPublicacionByid)

// router.post('/',[verifyTokenDocente, isDocente], createPublicacion)

//CREATE
router.post('/',verifyToken, verifyDocente, createPublicacion)

//UPDATE
router.put('/:idPublicacion',verifyToken, verifyUserPub,updatePublicacion)

//DELETE
router.delete('/:idPublicacion',verifyToken, verifyUserPub, deletePublicacion)

export default router;
