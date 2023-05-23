import app from "../index.js";
import request from "supertest";

describe("GET /api/docentes", () => {
    test("should respond with a 200 status code", async () => {
        const response = await request(app).get("/api/docentes").send();
        console.log(response);
        expect(response.body).toBeInstanceOf(Array);
    });

    test("should respond an array", async () => {
        const response = await request(app).get("/tasks").send();
        expect(response.body).toBeInstanceOf(Object);
    });
});

describe("POST /api/docentes", () => {
    describe("given a id, nombreUsuario, passwd, email, nombre, apellido and idFacultad", () => {
        const newAdmin = {
            id: "425642",
            nombreUsuario: "pedropascal",
            passwd: "passwd0",
            email: "pedropascal@unicesar.edu.co",
            nombre: "Pedro",
            apellido: "Pascal",
            idFacultad: "IT",
        };

        // should respond with a 200 code
        test("should respond with a 200 status code", async () => {
            const response = await request(app).post("/api/docentes").send(newAdmin);
            console.log(response);
            expect(response.statusCode).toBe(200);
        });
    });
});


describe("POST /api/admins", () => {
    describe("given a id, nombreUsuario, passwd, email, nombre, apellido", () => {
        const newAdmin = {
            id: "76424125",
            nombreUsuario: "marioruiz",
            passwd: "passwd2",
            email: "marioruiz@unicesar.edu.co",
            nombre: "Mario",
            apellido: "Ruiz",
        };

        // should respond with a 200 code
        test("should respond with a 200 status code", async () => {
            const response = await request(app).post("/api/admins").send(newAdmin);
            console.log(response);
            expect(response.statusCode).toBe(200);
        });
    });
});

describe("POST /api/facultades", () => {
    describe("given a codigoFacultad and nombreFacultad", () => {
        const newPublica = {
            codigoFacultad: "CF",
            nombreFacultad: "Ciencia Filosófica",
        };

        // should respond with a 200 code
        test("should respond with a 200 status code", async () => {
            const response = await request(app).post("/api/facultades").send(newPublica);
            console.log(response);
            expect(response.statusCode).toBe(200);
        });
    });
});

describe("POST /api/publicaciones", () => {
    describe("given a tituloPublicacion, autor, descripcionPub", () => {

        const upload = multer({ dest: 'uploads/' });

        const newPublica = {
            tituloPublicacion: "Reconocimiento de voz utilizado como sistema de seguridad aplicando técnica de aprendizaje supervisado",
            autor: "Diego Andres Pallares",
            descripcionPub: "El sistema de seguridad por reconocimiento de voz es una solución viable para mejorar la seguridad en el hogar.",
        };

        const filePath = path.join(__dirname, 'testFile.txt'); // Ruta completa al archivo de prueba

        // should respond with a 200 code
        // test("should respond with a 200 status code", async () => {
        //     const response = await request(app).post("/api/publicaciones").send(newPublica);
        //     console.log(response);
        //     expect(response.statusCode).toBe(200);
        // });

        test('should respond with a 200 status code', async () => {
            const response = await request(app)
                .post('/api/publicaciones')
                .field('tituloPublicacion', newPublica.tituloPublicacion)
                .field('autor', newPublica.autor)
                .field('descripcionPub', newPublica.descripcionPub)
                .attach('archivo', filePath);

            expect(response.statusCode).toBe(200);
        });
    });
});
