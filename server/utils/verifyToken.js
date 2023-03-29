import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";
import {SECRET} from '../config.js'

export const verifyToken  = (req, res, next) => {

  const token =  req.cookies.access_token;
  if (!token) {
    return next(createError(403, "You are not authenticated!"));
  }

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, (err) => {
    if (err) return next(err);
    if (req.user.isAdmin) {
      // console.log(req.user);
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

export const verifyDocente = (req, res, next) => {
  verifyToken(req, res, (err) => {
    if (err) return next(err);
    if (req.user.isAdmin==false) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, (err) => {
    if (err) return next(err);
    if (req.user.id === req.params.idDocente || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

export const verifyUserPub = (req, res, next) => {
  verifyToken(req, res, (err) => {
    if (err) return next(err);
    if (req.user.id === req.user.idDocente || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};
