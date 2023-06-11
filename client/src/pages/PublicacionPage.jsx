import { getPublicacioById } from '../api/api'
import { useState, useEffect } from 'react'
import Publicacion from '../components/Publicacion'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom';
import NotFoundPage from './NotFoundPage'


export default function PublicacionPage() {
    const [publicacion, setPublicacion] = useState([]);

    const { idPublicacion } = useParams()

    useEffect(() => {
        fetchPublicacionById();
    }, []);

    const fetchPublicacionById = async () => {
        try {
            const response = await getPublicacioById(idPublicacion);
            setPublicacion(response);
        } catch (error) {
            console.log(error);
        }
    };

    if (publicacion.status !== 200) {
        console.log(publicacion.status)
        return <NotFoundPage />;
    }

    return (
        <div>
            <Navbar />
            <Publicacion publicacion={publicacion} />
        </div>
    )
}
