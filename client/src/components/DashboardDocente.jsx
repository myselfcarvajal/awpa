import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const DashboardDocente = () => {
    const [showForm, setShowForm] = useState(false);
    const [tituloPublicacion, setTituloPublicacion] = useState('');
    const [descripcionPub, setDescripcionPub] = useState('');
    const [autor, setAutor] = useState('');
    const [file, setFile] = useState(null);
    const [errorMeszsage, setErrorMessage] = useState(''); // Mensaje de error

    const handleAddClick = () => {
        setShowForm(true);
    };

    const handleExitClick = () => {
        setShowForm(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const access_token = Cookies.get('access_token');
            // // Realizar la solicitud de inicio de sesión al backend
            // const response = await axios.post('http://localhost:3000/api/publicaciones/', {
            //     tituloPublicacion: tituloPublicacion,
            //     autor: autor,
            //     descripcionPub: descripcionPub,
            //     file: file,
            // }, {
            //     credentials: 'include',
            //     headers: {
            //         'Content-Type': 'multipart/form-data',
            //     },
            // });

            const access_token = Cookies.get('access_token');
            const formData = new FormData();
            formData.append('tituloPublicacion', tituloPublicacion);
            formData.append('autor', autor);
            formData.append('descripcionPub', descripcionPub);
            formData.append('file', file);

            const response = await axios.post(
                'http://localhost:3000/api/publicaciones/',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true,
                }
            );


            console.log(response)


            setTituloPublicacion('');
            setDescripcionPub('');
            setAutor('');
            setFile(null);
            setShowForm(false);

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

    return (
        //     <div className="my-8 mr-4 ml-8">
        //         <h1 className="text-4xl font-sans text-center font-bold from-slate-500 mb-4 text-gray-600">
        //             Panel de control publicaciones
        //         </h1>

        //         <div>
        //             <button
        //                 className="bg-indigo-600 text-white text-4xl font-bold font-mono text- py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500 my-4"
        //                 onClick={handleAddClick}
        //             >
        //                 add
        //             </button>
        //         </div>

        //         {showForm && (
        //             <div className="fixed inset-0 flex items-center justify-center z-50">
        //                 <form className="bg-white p-8 rounded shadow-md" onSubmit={handleSubmit}>
        //                     <div className="flex justify-end">
        //                         <button
        //                             className="bg-red-600 text-white text-2xl font-bold font-mono text- py-2 px-4 rounded hover:bg-red-400 duration-500"
        //                             onClick={handleExitClick}
        //                         >
        //                             X
        //                         </button>
        //                     </div>
        //                     <h2 className="text-2xl font-bold mb-4">Crear Publicación</h2>
        //                     <div className="mb-4">
        //                         <label className="block font-bold mb-2" htmlFor="tituloPublicacion">
        //                             Título de la publicación
        //                         </label>
        //                         <input
        //                             className="w-full px-3 py-2 border rounded"
        //                             type="text"
        //                             id="tituloPublicacion"
        //                             value={tituloPublicacion}
        //                             onChange={(e) => setTituloPublicacion(e.target.value)}
        //                         />
        //                     </div>
        //                     <div className="mb-4">
        //                         <label className="block font-bold mb-2" htmlFor="descripcionPub">
        //                             Descripción de la publicación
        //                         </label>
        //                         <textarea
        //                             className="w-full px-3 py-2 border rounded"
        //                             id="descripcionPub"
        //                             value={descripcionPub}
        //                             onChange={(e) => setDescripcionPub(e.target.value)}
        //                         ></textarea>
        //                     </div>
        //                     <div className="mb-4">
        //                         <label className="block font-bold mb-2" htmlFor="autor">
        //                             Autor
        //                         </label>
        //                         <input
        //                             className="w-full px-3 py-2 border rounded"
        //                             type="text"
        //                             id="autor"
        //                             value={autor}
        //                             onChange={(e) => setAutor(e.target.value)}
        //                         />
        //                     </div>
        //                     <div className="mb-4">
        //                         <label className="block font-bold mb-2" htmlFor="file">
        //                             Archivo
        //                         </label>
        //                         <input
        //                             className="w-full"
        //                             type="file"
        //                             id="file"
        //                             onChange={(e) => setFile(e.target.files[0])}
        //                         />
        //                     </div>
        //                     <div className="flex justify-end">
        //                         <button
        //                             className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-400"
        //                             type="submit"
        //                         >
        //                             Enviar
        //                         </button>
        //                     </div>
        //                 </form>
        //             </div>
        //         )}
        //     </div>
        // );
        <div className="my-8 mr-4 ml-8">
            <h1 className="text-4xl font-sans text-center font-bold from-slate-500 mb-4 text-gray-600">
                Panel de control publicaciones
            </h1>

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
                    <form className="bg-white p-8 rounded shadow-md" onSubmit={handleSubmit}>
                        <div className="flex justify-end">
                            <button
                                className="bg-red-600 text-white text-2xl font-bold font-mono text- py-2 px-4 rounded hover:bg-red-400 duration-500"
                                onClick={handleExitClick}
                            >
                                X
                            </button>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Crear Publicación</h2>
                        <div className="mb-4">
                            <label className="block font-bold mb-2" htmlFor="tituloPublicacion">
                                Título de la publicación
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded"
                                type="text"
                                id="tituloPublicacion"
                                value={tituloPublicacion}
                                onChange={(e) => setTituloPublicacion(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold mb-2" htmlFor="descripcionPub">
                                Descripción de la publicación
                            </label>
                            <textarea
                                className="w-full px-3 py-2 border rounded"
                                id="descripcionPub"
                                value={descripcionPub}
                                onChange={(e) => setDescripcionPub(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold mb-2" htmlFor="autor">
                                Autor
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded"
                                type="text"
                                id="autor"
                                value={autor}
                                onChange={(e) => setAutor(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold mb-2" htmlFor="file">
                                Archivo
                            </label>
                            <input
                                className="w-full"
                                type="file"
                                id="file"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div>
                        <div className="flex justify-end">
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
        </div>
    );
};

export default DashboardDocente;

