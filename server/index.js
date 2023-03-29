import express from 'express';
import morgan from "morgan";
import { sequelize } from './database/database.js'
import cookieParser from "cookie-parser";
import cors from "cors";
import './models/Docente.js'
import './models/Publicacion.js'
import './models/Administrador.js'
import './models/Facultad.js'
import publicaciones from './routes/publicaciones.routes.js';
import admins from './routes/admins.routes.js'
import docentes from './routes/docentes.routes.js'
import facultades from './routes/facultades.routes.js'
import auth from './routes/auth.routes.js'
import fileUpload from 'express-fileupload';
import './config.js'
import { login } from './controllers/auth.controller.js';

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

async function database() {
    try {
        await sequelize.sync({ force: false })
        // await User.sync({ alter: true })
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

database()

// Middlewares 
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}));

// Routes
app.use("/api/publicaciones", publicaciones);
app.use("/api/admins", admins);
app.use("/api/docentes", docentes);
app.use("/api/facultades", facultades);
app.use("/api/auth/", auth);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
});

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
