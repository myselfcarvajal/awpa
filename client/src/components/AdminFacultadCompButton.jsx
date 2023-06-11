import React, { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios'

const AdminFacultadCompButton = () => {
    const [showForm, setShowForm] = useState(false);
    const [codigoFacultad, setCodigoFacultad] = useState('');
    const [nombreFacultad, setNombreFacultad] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleAddClick = () => {
        setShowForm(true);
    };

    const handleExitClick = () => {
        setShowForm(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const access_token = Cookies.get('access_token');

            const formData = new FormData();
            formData.append('codigoFacultad', codigoFacultad);
            formData.append('nombreFacultad', nombreFacultad);

            const response = await axios.post(
                'http://localhost:3000/api/facultades/',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true,
                }
            );

            console.log(response);


            setCodigoFacultad('');
            setNombreFacultad('');
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
                    <h2 className="text-2xl font-bold mb-">Crear Facultad</h2>
                    <div className="mb-4">
                        <label className="block font-bold text-sm " htmlFor="id">
                            Codigo facultad
                        </label>
                        <input
                            className="w-full px-4 py-1  border rounded"
                            type="text"
                            id="codigoFacultad"
                            value={codigoFacultad}
                            onChange={(e) => setCodigoFacultad(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold text-sm" htmlFor="id">
                            Nombre facultad
                        </label>
                        <input
                            className="w-full px-4 py-1 border rounded"
                            type="text"
                            id="nombreFacultad"
                            value={nombreFacultad}
                            onChange={(e) => setNombreFacultad(e.target.value)}
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

export default AdminFacultadCompButton;
