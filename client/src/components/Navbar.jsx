import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button';
import awpaLogo from '../assets/images/awpa-logo.png';
import LogoutButton from './LogoutButton';


const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        // Verificar si hay información de usuario en el Local Storage
        const userDataJSON = localStorage.getItem('user_data');
        const loggedIn = userDataJSON !== null;

        setLoggedIn(loggedIn);
    }, []);

    const handleLogout = () => {
        // Limpiar la información de usuario en el Local Storage y establecer loggedIn en falso
        localStorage.removeItem('user_data');
        // Borrar la cookie estableciendo su valor en vacío y fecha de expiración pasada
        document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setLoggedIn(false);
    };

    let Links = [
        { name: "Publicaciones", link: "/publicaciones" },
        { name: "Docentes", link: "/docentes" },
        { name: "Facultades", link: "/facultades" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-s font-bold text-2xl cursor-pointer flex items-center font-sans
      text-gray-800'>
                    <Link to="/">
                        <img
                            className="h-22 w-24 mr-2"
                            src={awpaLogo}
                            alt="awpa-logo"
                        />
                    </Link>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 font-sans text-2xl md:my-0 my-7'>
                                <Link to={link.link} className='text-gray-800 hover:text-gray-400 duration-500' >{link.name}</Link>
                            </li>
                        ))
                    }
                    {/* Renderizar el botón de inicio de sesión solo si el usuario no está logueado */}
                    {/* {loggedIn ? (
                        <LogoutButton onClick={handleLogout}>Salir</LogoutButton>
                    ) : (
                        <Link to="/docente/login">
                            <Button>Login</Button>
                        </Link>
                    )} */}

                    {/* Renderizar el botón de inicio de sesión solo si el usuario no está logueado */}
                    {!loggedIn ? (
                        <Link to='/docente/login'>
                            <Button>Login</Button>
                        </Link>
                    ) : (
                        <>
                            <li className='md:ml-8 font-sans text-2xl md:my-0 my-7'>
                                <Link to='/docente/dashbord' className='text-gray-800 hover:text-gray-400 duration-500'>
                                    Dashboard
                                </Link>
                            </li>
                            <li className='md:ml-8 font-sans text-2xl md:my-0 my-7'>
                                <Link to='/'>
                                    <LogoutButton onClick={handleLogout}>Salir</LogoutButton>

                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
