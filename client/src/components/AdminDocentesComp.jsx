import React, { useState, useEffect } from 'react';
import { getDocentesBasicData, getDocentesBasicDataById, deleteDocente } from '../api/api'
import axios from 'axios'

const AdminDocentesComp = () => {
    const [docente, setDocente] = useState([]);
    const [id, SetId] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [passwd, setPasswd] = useState('');
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [idFacultad, SerIdFacultad] = useState('');
    const [editingDocente, setEditingDocente] = useState({
        id: '',
        nombreUsuario: '',
        passwd: '',
        email: '',
        nombre: '',
        apellido: '',
        idFacultad: '',
    });


    const [showForm, setShowForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); // Mensaje de error
    const [editingId, setEditingId] = useState();


    const userData = JSON.parse(localStorage.getItem('user_data'));
    const idAdmin = userData.id;

    useEffect(() => {
        fetchDocentes();
    }, []);

    const fetchDocentes = async () => {
        try {
            const response = await getDocentesBasicData();
            setDocente(response);
        } catch (error) {
            console.log(error);
        }
    };

    if (docente.length === 0) {
        return null;
    }

    const { data } = docente;


    const handleEditar = async (id) => {
        try {
            setEditingId(id);
            setShowForm(true)
            console.log('Editar Docente con ID:', id);
            console.log('editingId:', editingId);




            const docente = await getDocentesBasicDataById(id);
            console.log(docente)
            const { data } = docente
            setEditingDocente(data);

            console.log('Editar Docente con ID:', id);
        } catch (error) {
            console.log(error);
        }
    };

    const handleEliminar = async (id) => {
        try {
            await deleteDocente(id);
            console.log('Docente eliminado:', id);
            fetchDocentes();
        } catch (error) {
            console.log('Error al el docente:', error);
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
            formData.append('id', editingDocente.id);
            formData.append('nombreUsuario', editingDocente.nombreUsuario);
            formData.append('email', editingDocente.email);
            formData.append('nombre', editingDocente.nombre);
            formData.append('apellido', editingDocente.apellido);
            formData.append('idFacultad', editingDocente.idFacultad);

            const id = editingDocente.id;

            const docenteUpdate = await axios.put(
                `http://localhost:3000/api/docentes/${id}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true,
                }
            );

            console.log(docenteUpdate);

            // setTituloPublicacion('');
            // setDescripcionPub('');
            // setAutor('');
            // setFile(null);
            SetId('');
            setNombreUsuario('');
            setPasswd('');
            setEmail('');
            setNombre('');
            setApellido('');
            SerIdFacultad('');

            setEditingDocente({
                ...editingDocente,
                // tituloPublicacion: '',
                // descripcionPub: '',
                // autor: '',
                // file: null,
                id: '',
                nombreUsuario: '',
                passwd: '',
                email: '',
                nombre: '',
                apellido: '',
                idFacultad: '',
            });


            setShowForm(false);

            window.location.reload();

        } catch (error) {
            console.log('Error al actualizar el Docente:', error);
            setErrorMessage('Error al actualizar el Docente:');
        }
    };



    return (
        <div className="container mx-auto">
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">
                            Id
                        </th>
                        <th className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">
                            UserName
                        </th>
                        <th className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">
                            Passwd
                        </th>
                        <th className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">
                            Email
                        </th>
                        <th className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">
                            Nombre
                        </th>
                        <th className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">
                            Apellido
                        </th>
                        <th className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">
                            IdFacultad
                        </th>
                        <th className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody className="text-gray-600">
                    {data && data.map((docente) => (
                        <tr key={docente.id}>
                            <td className="py-3 px-6 border-b border-gray-200">{docente.id}</td>
                            <td className="py-3 px-6 border-b border-gray-200">{docente.nombreUsuario}</td>
                            <td className="py-3 px-6 border-b border-gray-200">{docente.passwd}</td>
                            <td className="py-3 px-6 border-b border-gray-200">{docente.email}</td>
                            <td className="py-3 px-6 border-b border-gray-200">{docente.nombre}</td>
                            <td className="py-3 px-6 border-b border-gray-200">{docente.apellido}</td>
                            <td className="py-3 px-6 border-b border-gray-200">{docente.idFacultad}</td>
                            <td className="py-3 px-6 border-b border-gray-200">
                                <button
                                    className="mr-2 text-sm bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded"
                                    onClick={() => handleEditar(docente.id)}
                                >
                                    Editar
                                </button>
                                <button
                                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                                    onClick={() => handleEliminar(docente.id)}
                                >
                                    Eliminar
                                </button>
                                {editingId === docente.id && (
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
                                            <h2 className="text-2xl font-bold mb-4">Editar Docente</h2>
                                            <div className="mb-4">
                                                <label className="block font-bold mb-2" htmlFor="id">
                                                    Cedula
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 border rounded"
                                                    type="text"
                                                    id="id"
                                                    value={editingDocente.id}
                                                    onChange={(e) => setEditingDocente({ ...editingDocente, id: e.target.value })}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block font-bold mb-2" htmlFor="nombreUsuario">
                                                    Nombre usuario
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 border rounded"
                                                    id="nombreUsuario"
                                                    value={editingDocente.nombreUsuario}
                                                    onChange={(e) => setEditingDocente({ ...editingDocente, nombreUsuario: e.target.value })}
                                                ></input>
                                            </div>
                                            <div className="mb-4">
                                                <label className="block font-bold mb-2" htmlFor="passwd">
                                                    Password
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 border rounded"
                                                    type="text"
                                                    id="passwd"
                                                    value={editingDocente.passwd}
                                                    onChange={(e) => setEditingDocente({ ...editingDocente, passwd: e.target.value })}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block font-bold mb-2" htmlFor="email">
                                                    Email
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 border rounded"
                                                    type="text"
                                                    id="email"
                                                    value={editingDocente.email}
                                                    onChange={(e) => setEditingDocente({ ...editingDocente, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block font-bold mb-2" htmlFor="nombre">
                                                    Nombre
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 border rounded"
                                                    type="text"
                                                    id="nombre"
                                                    value={editingDocente.nombre}
                                                    onChange={(e) => setEditingDocente({ ...editingDocente, nombre: e.target.value })}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block font-bold mb-2" htmlFor="apellido">
                                                    Apellido
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 border rounded"
                                                    type="text"
                                                    id="apellido"
                                                    value={editingDocente.apellido}
                                                    onChange={(e) => setEditingDocente({ ...editingDocente, apellido: e.target.value })}
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="block font-bold mb-2" htmlFor="idFacultad">
                                                    Codigo facultad
                                                </label>
                                                <input
                                                    className="w-full px-3 py-2 border rounded"
                                                    type="text"
                                                    id="idFacultad"
                                                    value={editingDocente.idFacultad}
                                                    onChange={(e) => setEditingDocente({ ...editingDocente, idFacultad: e.target.value })}
                                                />
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

export default AdminDocentesComp;
