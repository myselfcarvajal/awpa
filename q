warning: CRLF will be replaced by LF in server/controllers/publicaciones.controller.js.
The file will have its original line endings in your working directory
warning: CRLF will be replaced by LF in server/routes/publicaciones.routes.js.
The file will have its original line endings in your working directory
warning: CRLF will be replaced by LF in server/utils/verifyToken.js.
The file will have its original line endings in your working directory
[1mdiff --git a/server/controllers/publicaciones.controller.js b/server/controllers/publicaciones.controller.js[m
[1mindex 16d5df5..a833af3 100644[m
[1m--- a/server/controllers/publicaciones.controller.js[m
[1m+++ b/server/controllers/publicaciones.controller.js[m
[36m@@ -61,7 +61,6 @@[m [mexport const createPublicacion = async (req, res, next) => {[m
 };[m
 [m
 export const updatePublicacion = async (req, res, next) => {[m
[31m-    const id = req.user.id[m
     const { idPublicacion } = req.params;[m
 [m
     try {[m
[36m@@ -71,13 +70,19 @@[m [mexport const updatePublicacion = async (req, res, next) => {[m
             descripcionPub,[m
         } = req.body;[m
 [m
[32m+[m[32m        const publicacionFound = await Publicacion.findByPk(idPublicacion);[m
[32m+[m
[32m+[m[32m        if (!publicacionFound) return res.status(409).json({[m
[32m+[m[32m            'status': 404,[m
[32m+[m[32m            'message': 'Publicaction Not found',[m
[32m+[m[32m        })[m
[32m+[m
         // const result = await uploadFile(req.files.file) a    bilitar luego[m
 [m
         const file_name = req.files.file.name[m
         const awsUrl = 'https://awpa-aws.s3.amazonaws.com/'[m
 [m
         const urlPublicacion = awsUrl + file_name[m
[31m-        const idDocente = req.user.id[m
 [m
         const updatePublicacion = await Publicacion.update({[m
             idPublicacion,[m
[36m@@ -85,21 +90,41 @@[m [mexport const updatePublicacion = async (req, res, next) => {[m
             autor,[m
             descripcionPub,[m
             urlPublicacion,[m
[31m-            idDocente[m
         }, {[m
             where: {[m
                 idPublicacion: idPublicacion,[m
             }[m
         });[m
 [m
[31m-        res.res.status(204).json(updatePublicacion)[m
[32m+[m[32m        res.status(204).json(updatePublicacion)[m
     } catch (err) {[m
         next(err);[m
     }[m
[31m-[m
[31m-[m
 };[m
 [m
 export const deletePublicacion = async (req, res, next) => {[m
[32m+[m[32m    try {[m
[32m+[m[32m        const { idPublicacion } = req.params;[m
[32m+[m
[32m+[m[32m        const publicacionFound = await Publicacion.findByPk(idPublicacion);[m
[32m+[m
[32m+[m[32m        if (!publicacionFound) return res.status(409).json({[m
[32m+[m[32m            'status': 404,[m
[32m+[m[32m            'message': 'Publication Not found',[m
[32m+[m[32m        })[m
[32m+[m
[32m+[m[32m        await Publicacion.destroy({[m
[32m+[m[32m            where: {[m
[32m+[m[32m                idPublicacion: idPublicacion,[m
[32m+[m[32m            },[m
[32m+[m[32m        });[m
[32m+[m
[32m+[m[32m        res.status(200).json({[m
[32m+[m[32m            'status': 200,[m
[32m+[m[32m            'message': 'Publication has been deleted.',[m
[32m+[m[32m        })[m
 [m
[32m+[m[32m    } catch (err) {[m
[32m+[m[32m        next(err)[m
[32m+[m[32m    }[m
 };[m
[1mdiff --git a/server/routes/publicaciones.routes.js b/server/routes/publicaciones.routes.js[m
[1mindex 719d489..e83bb56 100644[m
[1m--- a/server/routes/publicaciones.routes.js[m
[1m+++ b/server/routes/publicaciones.routes.js[m
[36m@@ -19,6 +19,6 @@[m [mrouter.post('/',verifyToken, verifyDocente, createPublicacion)[m
 router.put('/:idPublicacion',verifyToken, verifyUserPub,updatePublicacion)[m
 [m
 //DELETE[m
[31m-router.delete('/:idPublicacion',verifyToken,deletePublicacion)[m
[32m+[m[32mrouter.delete('/:idPublicacion',verifyToken, verifyUserPub, deletePublicacion)[m
 [m
 export default router;[m
[1mdiff --git a/server/utils/verifyToken.js b/server/utils/verifyToken.js[m
[1mindex 26e3061..a18a3db 100644[m
[1m--- a/server/utils/verifyToken.js[m
[1m+++ b/server/utils/verifyToken.js[m
[36m@@ -1,10 +1,11 @@[m
 import jwt from "jsonwebtoken";[m
 import { createError } from "../utils/error.js";[m
[31m-import {SECRET} from '../config.js'[m
[32m+[m[32mimport { SECRET } from '../config.js'[m
[32m+[m[32mimport { Publicacion } from '../models/Publicacion.js'[m
 [m
[31m-export const verifyToken  = (req, res, next) => {[m
[32m+[m[32mexport const verifyToken = (req, res, next) => {[m
 [m
[31m-  const token =  req.cookies.access_token;[m
[32m+[m[32m  const token = req.cookies.access_token;[m
   if (!token) {[m
     return next(createError(403, "You are not authenticated!"));[m
   }[m
[36m@@ -31,7 +32,7 @@[m [mexport const verifyAdmin = (req, res, next) => {[m
 export const verifyDocente = (req, res, next) => {[m
   verifyToken(req, res, (err) => {[m
     if (err) return next(err);[m
[31m-    if (req.user.isAdmin==false) {[m
[32m+[m[32m    if (req.user.isAdmin == false) {[m
       next();[m
     } else {[m
       return next(createError(403, "You are not authorized!"));[m
[36m@@ -51,9 +52,25 @@[m [mexport const verifyUser = (req, res, next) => {[m
 };[m
 [m
 export const verifyUserPub = (req, res, next) => {[m
[31m-  verifyToken(req, res, (err) => {[m
[32m+[m[32m  verifyToken(req, res, async (err) => {[m
     if (err) return next(err);[m
[31m-    if (req.user.id === req.user.idDocente || req.user.isAdmin) {[m
[32m+[m
[32m+[m[32m    const { idPublicacion } = req.params;[m
[32m+[m
[32m+[m[32m    const publicacionFound = await Publicacion.findByPk(idPublicacion);[m
[32m+[m
[32m+[m[32m    let publicadoBy = 0[m
[32m+[m
[32m+[m[32m    if (!publicacionFound) {[m
[32m+[m[32m      return res.status(409).json({[m
[32m+[m[32m        'status': 404,[m
[32m+[m[32m        'message': 'Publication Not found',[m
[32m+[m[32m      })[m
[32m+[m[32m    } else {[m
[32m+[m[32m      publicadoBy = publicacionFound.idDocente[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    if (req.user.id === publicadoBy || req.user.isAdmin) {[m
       next();[m
     } else {[m
       return next(createError(403, "You are not authorized!"));[m
