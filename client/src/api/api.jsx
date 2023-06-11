import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/', // URL base de tu API
  headers: {
    'Content-Type': 'application/json', // Tipo de contenido predeterminado
    // Puedes agregar encabezados personalizados aquí si es necesario
  },
});


export const getDocentesBasicData = () => {
  return api.get('/docentes/basic');
};

export const getDocentesBasicDataById = (id) => {
  return api.get(`/docentes/basic/${id}`);
};

export const createDocente = (formData) => {
  return axios.post('/docentes/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,
  });
};

export const deleteDocente = (id) => {
  return api.delete(`/docentes/${id}`, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,
  });
};

export const getPublicaciones = () => {
  return api.get('/publicaciones');
};

export const getPublicacioById = (idPublicacion) => {
  return api.get(`/publicaciones/${idPublicacion}`);
};

export const createPublicacion = () => {
  return api.get('');  //
};

export const deletePublicacion = (idPublicacion) => {
  return api.delete(`/publicaciones/${idPublicacion}`, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,
  });
};

export const updatePublicacion = (idPublicacion, updatedData) => {
  console.log('idPublicacion:', idPublicacion);
  return api.put(`/publicaciones/${idPublicacion}`, updatedData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,
  });
};

export const getFacultades = () => {
  return api.get('/facultades');
};


export const getFacultadeById = (codigoFacultad) => {
  return api.get(`facultades/${codigoFacultad}`);
};


export const deleteFacultad = (codigoFacultad) => {
  return api.delete(`/facultades/${codigoFacultad}`, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,
  });
};


export const getDocentes = () => {
  return api.get('/docentes');
};

export const getPublicationsByDocenteId = (idDocente) => {
  return api.get(`docentes/${idDocente}/publicaciones`);
};

//Login
export const login = (username, password) => {
  return api.post('/api/login', { nombreUsuario: username, passwd: password });
};


export default api;
