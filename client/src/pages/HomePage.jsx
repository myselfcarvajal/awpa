import CardPublicacion from "../components/CardPublicacion"
import Navbar from "../components/Navbar"
import Welcome from '../components/Welcome'
import { useState, useEffect } from 'react'
import { getPublicaciones } from '../api/api'

export default function HomePage() {
    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        fetchPublicaciones();
    }, []);

    const fetchPublicaciones = async () => {
        try {
            const response = await getPublicaciones();
            setPublicaciones(response.data);
            console.log(publicaciones)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Navbar />
            <Welcome/>
            <CardPublicacion publicaciones={publicaciones}/>
        </>
    )
}
