import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import { getFacultades } from '../api/api'
import CardFacultad from '../components/CardFacultad';

export default function FacultadesPage() {
  const [facultades, setFacultades] = useState([]);

  useEffect(() => {
    fetchFacultades();
  }, []);

  const fetchFacultades = async () => {
    try {
      const response = await getFacultades();
      setFacultades(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar/>
      <CardFacultad facultades={facultades}/>
    </>
  )
}
