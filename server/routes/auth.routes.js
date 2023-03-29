import express from 'express';
import { adminlogin, login } from '../controllers/auth.controller.js'

const router = express.Router();

router.post('/login', login)
// router.post('/registrarse', )

router.post('/adminlogin', adminlogin)
// router.post('/registrarse', )

export default router;
