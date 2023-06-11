// import React, { useState, useEffect } from 'react';
// import { getPublicationsByDocenteId, deletePublicacion, updatePublicacion, getPublicacioById } from '../api/api'

// const DataTable = () => {
//   const [docente, setDocente] = useState([]);
//   const [tituloPublicacion, setTituloPublicacion] = useState('');
//   const [descripcionPub, setDescripcionPub] = useState('');
//   const [autor, setAutor] = useState('');
//   const [file, setFile] = useState(null);
//   const [editingPublicacion, setEditingPublicacion] = useState({
//     idPublicacion: '',
//     tituloPublicacion: '',
//     descripcionPub: '',
//     autor: '',
//     file: null,
//   });
//   const [showForm, setShowForm] = useState(false);
//   const [errorMeszsage, setErrorMessage] = useState(''); // Mensaje de error
//   const [editingId, setEditingId] = useState(null);


//   const userData = JSON.parse(localStorage.getItem('user_data'));
//   const idDocente = userData.id;

//   useEffect(() => {
//     fetchDocente();
//   }, []);

//   const fetchDocente = async () => {
//     try {
//       const response = await getPublicationsByDocenteId(idDocente);
//       setDocente(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (docente.length === 0) {
//     return null;
//   }

//   const { data } = docente;

//   // const handleEditar = async (idPublicacion) => {
//   //   // try {
//   //   //   // Update the publication
//   //   //   await updatePublicacion(idPublicacion);
//   //   //   fetchData(); // Fetch updated data after update
//   //   // } catch (error) {
//   //   //   console.log(error);
//   //   // }
//   //   const publicacion =  await getPublicacioById(idPublicacion);

//   //   // Asignar los datos al estado editingPublicacion
//   //   setEditingPublicacion(publicacion);


//   //   // Mostrar el formulario
//   //   setShowForm(true);

//   //   console.log('Editar publicación con ID:', idPublicacion);
//   // };

//   const handleEditar = async (idPublicacion) => {
//     try {

//       setEditingId(idPublicacion);
//       setShowForm(true);

//       const publicacion = await getPublicacioById(idPublicacion);

//       // Asignar los datos al estado editingPublicacion
//       setEditingPublicacion(publicacion);

//       // // Mostrar el formulario
//       // setShowForm(true);

//       console.log('Editar publicación con ID:', idPublicacion);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleEliminar = async (idPublicacion) => {
//     try {
//       await deletePublicacion(idPublicacion);
//       console.log('Publicación eliminada:', idPublicacion);
//       // You may want to update the data after deleting the publication
//       fetchDocente();
//     } catch (error) {
//       console.log('Error al eliminar la publicación:', error);
//     }
//   };

//   const handleExitClick = () => {
//     setEditingId(null);
//     setShowForm(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append('tituloPublicacion', tituloPublicacion);
//       formData.append('autor', autor);
//       formData.append('descripcionPub', descripcionPub);
//       formData.append('file', file);

//       const idPublicacion = editingPublicacion.idPublicacion; // Obtener el valor de idPublicacion desde editingPublicacion


//       const publicacionUpdate = await updatePublicacion(idPublicacion, formData)

//       // const response = await axios.post(
//       //   'http://localhost:3000/api/publicaciones/',
//       //   formData,
//       //   {
//       //     headers: {
//       //       'Content-Type': 'multipart/form-data',
//       //     },
//       //     withCredentials: true,
//       //   }
//       // );


//       console.log(publicacionUpdate)


//       setTituloPublicacion('');
//       setDescripcionPub('');
//       setAutor('');
//       setFile(null);

//       // Restablecer el estado de la publicación en edición
//       setEditingPublicacion(null);

//       // Ocultar el formulario
//       setShowForm(false);

//       // // Obtener el token de la respuesta del backend
//       // const token = access_token;

//       // // Establecer el token en la cookie
//       // Cookies.set('access_token', token, { expires: 7, path: '/' });

//       // Refrescar la página
//       window.location.reload();

//     } catch (error) {
//       // Manejar errores de inicio de sesión
//       console.log('Error al actualizar la publicación:', error);

//       // Establecer el mensaje de error
//       setErrorMessage('Error al actualizar la publicación:');
//     }
//   };

//   const handleFileChange = (e) => {
//     setEditingPublicacion({ ...editingPublicacion, file: e.target.files[0] });
//   };

//   return (
//     <div className="container mx-auto">
//       <table className="min-w-full">
//         <thead>
//           <tr>
//             <th className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">
//               ID
//             </th>
//             <th className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">
//               Título
//             </th>
//             <th className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">
//               Autor
//             </th>
//             <th className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">
//               Descripción
//             </th>
//             <th className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">
//               Acciones
//             </th>
//           </tr>
//         </thead>
//         <tbody className="text-gray-600">
//           {data && data.map((publicacion) => (
//             <tr key={publicacion.idPublicacion}>
//               <td className="py-3 px-6 border-b border-gray-200">{publicacion.idPublicacion}</td>
//               <td className="py-3 px-6 border-b border-gray-200">{publicacion.tituloPublicacion}</td>
//               <td className="py-3 px-6 border-b border-gray-200">{publicacion.autor}</td>
//               <td className="py-3 px-6 border-b border-gray-200">{publicacion.descripcionPub}</td>
//               <td className="py-3 px-6 border-b border-gray-200">
//                 <button
//                   className="mr-2 text-sm bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded"
//                   onClick={() => handleEditar(publicacion.idPublicacion)}
//                 >
//                   Editar
//                   {editingId === publicacion.idPublicacion && (
//                     <div className="fixed inset-0 flex items-center justify-center z-50">
//                       <form className="bg-white p-8 rounded shadow-md" onSubmit={handleSubmit}>
//                         <div className="flex justify-end">
//                           <button
//                             className="bg-red-600 text-white text-2xl font-bold font-mono text- py-2 px-4 rounded hover:bg-red-400 duration-500"
//                             onClick={handleExitClick}
//                           >
//                             X
//                           </button>
//                         </div>
//                         <h2 className="text-2xl font-bold mb-4">Crear Publicación</h2>
//                         <div className="mb-4">
//                           <label className="block font-bold mb-2" htmlFor="tituloPublicacion">
//                             Título de la publicación
//                           </label>
//                           <input
//                             className="w-full px-3 py-2 border rounded"
//                             type="text"
//                             id="tituloPublicacion"
//                             // value={editingPublicacion?.tituloPublicacion || ''}
//                             value={editingPublicacion.tituloPublicacion}
//                             onChange={(e) => setEditingPublicacion({ ...editingPublicacion, tituloPublicacion: e.target.value })}
//                           />
//                         </div>
//                         <div className="mb-4">
//                           <label className="block font-bold mb-2" htmlFor="descripcionPub">
//                             Descripción de la publicación
//                           </label>
//                           <textarea
//                             className="w-full px-3 py-2 border rounded"
//                             id="descripcionPub"
//                             // value={editingPublicacion?.descripcionPub || ''}
//                             value={editingPublicacion.descripcionPub}
//                             onChange={(e) => setEditingPublicacion({ ...editingPublicacion, descripcionPub: e.target.value })}
//                           ></textarea>
//                         </div>
//                         <div className="mb-4">
//                           <label className="block font-bold mb-2" htmlFor="autor">
//                             Autor
//                           </label>
//                           <input
//                             className="w-full px-3 py-2 border rounded"
//                             type="text"
//                             id="autor"
//                             // value={editingPublicacion?.autor || ''}
//                             value={editingPublicacion.autor}
//                             onChange={(e) => setEditingPublicacion({ ...editingPublicacion, autor: e.target.value })}
//                           />
//                         </div>
//                         <div className="mb-4">
//                           <label className="block font-bold mb-2" htmlFor="file">
//                             Archivo
//                           </label>
//                           <input
//                             className="w-full"
//                             type="file"
//                             id="file"
//                             onChange={handleFileChange}
//                           // onChange={(e) => setEditingPublicacion({ ...editingPublicacion, => setFile(e.target.files[0])})}

//                           // onChange={(e) => setFile(e.target.files[0])}
//                           />
//                         </div>
//                         <div className="flex justify-end">
//                           <button
//                             className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-400"
//                             type="submit"
//                           >
//                             Actualizar
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                   )}

//                 </button>
//                 <button
//                   className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
//                   onClick={() => handleEliminar(publicacion.idPublicacion)}
//                 >
//                   Eliminar
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataTable;


import React, { useState, useEffect } from 'react';
import { getPublicationsByDocenteId, deletePublicacion, updatePublicacion, getPublicacioById } from '../api/api'
import axios from 'axios'

const DataTable = () => {
  const [docente, setDocente] = useState([]);
  const [tituloPublicacion, setTituloPublicacion] = useState('');
  const [descripcionPub, setDescripcionPub] = useState('');
  const [autor, setAutor] = useState('');
  const [file, setFile] = useState(null);
  const [editingPublicacion, setEditingPublicacion] = useState({
    idPublicacion: '',
    tituloPublicacion: '',
    descripcionPub: '',
    autor: '',
    file: null,
  });
  const [showForm, setShowForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // Mensaje de error
  const [editingId, setEditingId] = useState();


  const userData = JSON.parse(localStorage.getItem('user_data'));
  const idDocente = userData.id;

  useEffect(() => {
    fetchDocente();
  }, []);

  const fetchDocente = async () => {
    try {
      const response = await getPublicationsByDocenteId(idDocente);
      setDocente(response);
    } catch (error) {
      console.log(error);
    }
  };

  if (docente.length === 0) {
    return null;
  }

  const { data } = docente;

  const handleEditar = async (idPublicacion) => {
    try {
      setEditingId(idPublicacion);
      setShowForm(true)
      console.log('Editar publicación con ID:', idPublicacion);
      console.log('editingId:', editingId);




      const publicacion = await getPublicacioById(idPublicacion);
      console.log(publicacion)
      const { data } = publicacion
      setEditingPublicacion(data);

      console.log('Editar publicación con ID:', idPublicacion);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEliminar = async (idPublicacion) => {
    try {
      await deletePublicacion(idPublicacion);
      console.log('Publicación eliminada:', idPublicacion);
      fetchDocente();
    } catch (error) {
      console.log('Error al eliminar la publicación:', error);
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
      formData.append('tituloPublicacion', editingPublicacion.tituloPublicacion);
      formData.append('autor', editingPublicacion.autor);
      formData.append('descripcionPub', editingPublicacion.descripcionPub);
      formData.append('file', editingPublicacion.file);
  
      const idPublicacion = editingPublicacion.idPublicacion;
  
      const publicacionUpdate = await axios.put(
        `http://localhost:3000/api/publicaciones/${idPublicacion}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );
  
      console.log(publicacionUpdate);

      setTituloPublicacion('');
      setDescripcionPub('');
      setAutor('');
      setFile(null);

      // setEditingPublicacion({ idPublicacion: '', tituloPublicacion: '', descripcionPub: '', autor: '', file: null });

      setEditingPublicacion({
        ...editingPublicacion,
        tituloPublicacion: '',
        descripcionPub: '',
        autor: '',
        file: null,
      });


      setShowForm(false);

      window.location.reload();

    } catch (error) {
      console.log('Error al actualizar la publicación:', error);
      setErrorMessage('Error al actualizar la publicación:');
    }
  };

  // const handleFileChange = (e) => {
  //   setEditingPublicacion({ ...editingPublicacion, file: e.target.files[0] });
  // };

  const handleFileChange = (e) => {
    setEditingPublicacion({
      ...editingPublicacion,
      file: e.target.files[0],
    });
  };

  return (
    <div className="container mx-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">
              ID
            </th>
            <th className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">
              Título
            </th>
            <th className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">
              Autor
            </th>
            <th className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">
              Descripción
            </th>
            <th className="py-3 px-6 bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {data && data.map((publicacion) => (
            <tr key={publicacion.idPublicacion}>
              <td className="py-3 px-6 border-b border-gray-200">{publicacion.idPublicacion}</td>
              <td className="py-3 px-6 border-b border-gray-200">{publicacion.tituloPublicacion}</td>
              <td className="py-3 px-6 border-b border-gray-200">{publicacion.autor}</td>
              <td className="py-3 px-6 border-b border-gray-200">{publicacion.descripcionPub}</td>
              <td className="py-3 px-6 border-b border-gray-200">
                <button
                  className="mr-2 text-sm bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded"
                  onClick={() => handleEditar(publicacion.idPublicacion)}
                >
                  Editar
                </button>
                <button
                  className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                  onClick={() => handleEliminar(publicacion.idPublicacion)}
                >
                  Eliminar
                </button>
                {editingId === publicacion.idPublicacion && (
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
                        <label className="block font-bold mb-2" htmlFor="tituloPublicacion">
                          Título de la publicación
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded"
                          type="text"
                          id="tituloPublicacion"
                          value={editingPublicacion.tituloPublicacion}
                          onChange={(e) => setEditingPublicacion({ ...editingPublicacion, tituloPublicacion: e.target.value })}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="descripcionPub">
                          Descripción de la publicación
                        </label>
                        <textarea
                          className="w-full px-3 py-2 border rounded"
                          id="descripcionPub"
                          value={editingPublicacion.descripcionPub}
                          onChange={(e) => setEditingPublicacion({ ...editingPublicacion, descripcionPub: e.target.value })}
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
                          value={editingPublicacion.autor}
                          onChange={(e) => setEditingPublicacion({ ...editingPublicacion, autor: e.target.value })}
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
                          onChange={handleFileChange}
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
    </div>
  );
};

export default DataTable;
