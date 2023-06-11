import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import { getPublicaciones } from '../api/api'
import CardPublicacion from '../components/CardPublicacion';

export default function PublicacionesPage() {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    fetchPublicaciones();
  }, []);

  const fetchPublicaciones = async () => {
    try {
      const response = await getPublicaciones();
      setPublicaciones(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar/>
      <CardPublicacion publicaciones={publicaciones}/>
    </>
  )
}
