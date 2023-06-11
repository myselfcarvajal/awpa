import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { getDocentes } from '../api/api'
import CardDocente from '../components/CardDocente';

export default function DocentesPage() {
  const [docentes, setDocentes] = useState([]);

  useEffect(() => {
    fetchDocentes();
  }, []);

  const fetchDocentes = async () => {
    try {
      const response = await getDocentes();
      setDocentes(response.data);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div>
      <Navbar />
      <CardDocente docentes={docentes}/>
    </div>
  )
}
