import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getPublicationsByDocenteId } from '../api/api'
import Navbar from '../components/Navbar';
import DocentePublicaciones from '../components/DocentePublicaciones';
import NotPublicaciones from '../components/NotPublicaciones';
import NotFoundPage from '../pages/NotFoundPage';

export default function PublicacionByDocentePage() {
  const [docente, setDocente] = useState([]);

  const { idDocente } = useParams()

  useEffect(() => {
    fetchDocente();
  }, []);

  const fetchDocente = async () => {
    try {
      const response = await getPublicationsByDocenteId(idDocente);
      setDocente(response);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  if (!docente) {
    return null; 
    
  }

  if (docente.status !== 200) {
    console.log(docente)
    return <NotFoundPage />;
  }


  if (docente.data.length === 0) { 
    return (
      <>
        <Navbar />
        <NotPublicaciones/>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <DocentePublicaciones docente={docente} />
    </>
  )
}
