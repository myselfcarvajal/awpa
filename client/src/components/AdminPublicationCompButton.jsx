import React, { useState } from 'react';
import { createDocente } from '../api/api'
import Cookies from 'js-cookie';
import axios from 'axios'

const AdminPublicationCompButton = () => {
    const [showForm, setShowForm] = useState(false);
    const [id, setId] = useState();
    const [nombreUsuario, setNombreUsuario] = useState();
    const [passwd, setPasswd] = useState();
    const [email, setEmail] = useState();
    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [idFacultad, setIdFacultad] = useState();

    const [ErrorMessage, setErrorMessage] = useState();

    const handleAddClick = () => {
        setShowForm(true);
    };

    const handleExitClick = () => {
        setShowForm(false);
    };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const formData = new FormData();
    //         formData.append('id', CreateDocente.id);
    //         formData.append('nombreUsuario', CreateDocente.nombreUsuario);
    //         formData.append('email', CreateDocente.email);
    //         formData.append('nombre', CreateDocente.nombre);
    //         formData.append('apellido', CreateDocente.apellido);
    //         formData.append('idFacultad', CreateDocente.idFacultad);

    //         const id = CreateDocente.id;

    //         // const docenteUpdate = await axios.put(
    //         //     `http://localhost:3000/api/docentes/${id}`,
    //         //     formData,
    //         //     {
    //         //         headers: {
    //         //             'Content-Type': 'multipart/form-data',
    //         //         },
    //         //         withCredentials: true,
    //         //     }
    //         // );


    //         const docenteCreated = await createDocente(formData);

    //         console.log(docenteCreated);

    //         setId('');
    //         setNombreUsuario('');
    //         setPasswd('');
    //         setEmail('');
    //         setNombre('');
    //         setApellido('');
    //         setIdFacultad('');

    //         setShowForm(false);

    //         window.location.reload();

    //     } catch (error) {
    //         console.log('Error al actualizar el Docente:', error);
    //         setErrorMessage('Error al actualizar el Docente:');
    //     }

    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const access_token = Cookies.get('access_token');

            const formData = new FormData();

            formData.append('id', id);
            formData.append('nombreUsuario', nombreUsuario);
            formData.append('passwd', passwd);
            formData.append('email', email);
            formData.append('nombre', nombre);
            formData.append('apellido', apellido);
            formData.append('idFacultad', idFacultad);

            // const response = await axios.post(
            //     'http://localhost:3000/api/publicaciones/',
            //     formData,
            //     {
            //         headers: {
            //             'Content-Type': 'multipart/form-data',
            //         },
            //         withCredentials: true,
            //     }
            // );

            const response = await axios.post(
                'http://localhost:3000/api/docentes/',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true,
                }
            );

            console.log(response);


            setId('');
            setNombreUsuario('');
            setPasswd('');
            setEmail('');
            setNombre('');
            setApellido('');
            setIdFacultad('');

            // Obtener el token de la respuesta del backend
            const token = access_token;

            // Establecer el token en la cookie
            Cookies.set('access_token', token, { expires: 7, path: '/' });

            // Refrescar la página
            window.location.reload();

        } catch (error) {
            // Manejar errores de inicio de sesión
            console.log('Error de inicio de sesión:', error);

            // Establecer el mensaje de error
            setErrorMessage('Usuario o contraseña incorrectas');
        }

    };


    return (<>
        <div>
            <button
                className="bg-indigo-600 text-white text-4xl font-bold font-mono text- py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500 my-4"
                onClick={handleAddClick}
            >
                add
            </button>
        </div>

        {showForm && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <form className="bg-white p-4 rounded shadow-md max-w-md mx-auto " onSubmit={handleSubmit}>
                    <div className="flex justify-end">
                        <button
                            className="bg-red-600 text-white text-xl font-bold font-mono text- py-1 px-3 rounded hover:bg-red-400 duration-500"
                            onClick={handleExitClick}
                        >
                            X
                        </button>
                    </div>
                    <h2 className="text-2xl font-bold mb-">Crear Docente</h2>
                    {/* <div className="mb-4">
                        <label className="block font-bold" htmlFor="tituloPublicacion">
                            Título de la publicación
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded"
                            type="text"
                            id="tituloPublicacion"
                            value={tituloPublicacion}
                            onChange={(e) => setTituloPublicacion(e.target.value)}
                        />
                    </div> */}

                    <div className="mb-4">
                        <label className="block font-bold text-sm " htmlFor="id">
                            Cedula
                        </label>
                        <input
                            className="w-full px-4 py-1  border rounded"
                            type="text"
                            id="id"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold text-sm" htmlFor="id">
                            Nombre usuario
                        </label>
                        <input
                            className="w-full px-4 py-1 border rounded"
                            type="text"
                            id="nombreUsuario"
                            value={nombreUsuario}
                            onChange={(e) => setNombreUsuario(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold text-sm" htmlFor="passwd">
                            Password
                        </label>
                        <input
                            className="w-full px-4 py-1 border rounded"
                            type="text"
                            id="passwd"
                            value={passwd}
                            onChange={(e) => setPasswd(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold text-sm" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-4 py-1 border rounded"
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold text-sm" htmlFor="nombre">
                            Nombre
                        </label>
                        <input
                            className="w-full px-4 py-1 border rounded"
                            type="text"
                            id="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold text-sm" htmlFor="apellido">
                            Apellido
                        </label>
                        <input
                            className="w-full px-4 py-1 border rounded"
                            type="text"
                            id="apellido"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold text-sm" htmlFor="idFacultad">
                            Codigo facultad
                        </label>
                        <input
                            className="w-full px-4 py-1 border rounded text-sm"
                            type="text"
                            id="idFacultad"
                            value={idFacultad}
                            onChange={(e) => setIdFacultad(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-end text-sm">
                        <button
                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-400"
                            type="submit"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        )}
    </>);
}

export default AdminPublicationCompButton;
