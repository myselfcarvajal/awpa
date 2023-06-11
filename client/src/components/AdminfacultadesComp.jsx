import React, { useState, useEffect } from 'react';
import { getFacultadeById, getFacultades, deleteFacultad } from '../api/api'
import axios from 'axios'

const AdminfacultadesComp = () => {
    const [facultad, setFacultad] = useState([]);
    const [codigoFacultad, setCodigoFacultad] = useState('');
    const [nombreFacultad, setNombreFacultad] = useState('');
    const [editingFacultad, setEditingFacultad] = useState({
        codigoFacultad: '',
        nombreFacultad: '',
    });

    const [showForm, setShowForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); // Mensaje de error
    const [editingId, setEditingId] = useState();


    const userData = JSON.parse(localStorage.getItem('user_data'));
    const idDocente = userData.id;

    useEffect(() => {
        fetchFacultad();
    }, []);

    const fetchFacultad = async () => {
        try {
            const response = await getFacultades();
            setFacultad(response);
        } catch (error) {
            console.log(error);
        }
    };

    if (facultad.length === 0) {
        return null;
    }

    const { data } = facultad;


    const handleEditar = async (codigoFacultad) => {
        try {
            setEditingId(codigoFacultad);
            setShowForm(true)

            console.log('editingId:', editingId);

            const facultad = await getFacultadeById(codigoFacultad);
            console.log(facultad)
            const { data } = facultad
            setEditingFacultad(data);

            console.log('Editar facultad con codigoFacultad:', codigoFacultad);

            fetchFacultad();
        } catch (error) {
            console.log(error);
        }
    };

    const handleEliminar = async (codigoFacultad) => {
        try {
            await deleteFacultad(codigoFacultad);
            console.log('Facultad eliminada:', codigoFacultad);
            fetchFacultad();
        } catch (error) {
            console.log('Error al eliminar la facultad:', error);
        }
    };

    const handleExitClick = () => {
        setEditingId(null);
        setShowForm(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('codigoFacultad', editingFacultad.codigoFacultad);
            formData.append('nombreFacultad', editingFacultad.nombreFacultad);


            const codigoFacultad = editingFacultad.codigoFacultad;

            const facultadUpdate = await axios.put(
                `http://localhost:3000/api/facultades/${codigoFacultad}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true,
                }
            );

            console.log(facultadUpdate);

            setCodigoFacultad('');
            setNombreFacultad('');


            setEditingFacultad({
                ...editingFacultad,
                codigoFacultad: '',
                nombreFacultad: '',
            });


            setShowForm(false);

            window.location.reload();
            // getfacultades()

        } catch (error) {
            console.log('Error al actualizar la facultad:', error);
            setErrorMessage('Error al actualizar la facultad:');
        }
    };

    return (
        <div className="container mx-auto">
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">
                            Codigo Facultad
                        </th>
                        <th className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">
                            Nombre Facultad
                        </th>
                        <th className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody className="text-gray-600">
                    {data && data.map((facultad) => (
                        <tr key={facultad.codigoFacultad}>
                            <td className="py-3 px-6 border-b border-gray-200">{facultad.codigoFacultad}</td>
                            <td className="py-3 px-6 border-b border-gray-200">{facultad.nombreFacultad}</td>
                            <td className="py-3 px-6 border-b border-gray-200">
                                <button
                                    className="mr-2 text-sm bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded"
                                    onClick={() => handleEditar(facultad.codigoFacultad)}
                                >
                                    Editar
                                </button>
                                <button
                                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                                    onClick={() => handleEliminar(facultad.codigoFacultad)}
                                >
                                    Eliminar
                                </button>
                                {editingId === facultad.codigoFacultad && (
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
                                            <h2 className="text-2xl font-bold mb-4">Editar Publicación</h2>
                                            <div className="mb-4">
                                                <label className="block font-bold mb-2" htmlFor="codigoFacultad">
                                                    Codigo facultad
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 border rounded"
                                                    type="text"
                                                    id="codigoFacultad"
                                                    value={editingFacultad.codigoFacultad}
                                                    onChange={(e) => setEditingFacultad({ ...editingFacultad, codigoFacultad: e.target.value })}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block font-bold mb-2" htmlFor="nombreFacultad">
                                                    Nombre facultad
                                                </label>
                                                <textarea
                                                    className="w-full px-3 py-2 border rounded"
                                                    id="nombreFacultad"
                                                    value={editingFacultad.nombreFacultad}
                                                    onChange={(e) => setEditingFacultad({ ...editingFacultad, nombreFacultad: e.target.value })}
                                                ></textarea>
                                            </div>
                                            <div className="flex justify-end">
                                                <button
                                                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-400"
                                                    type="submit"
                                                >
                                                    Actualizar
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>);
}

export default AdminfacultadesComp;
