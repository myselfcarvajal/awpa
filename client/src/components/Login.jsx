import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { axiosCookieJarSupport } from 'axios-cookiejar-support';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); // Estado para redireccionar al usuario
    const [errorMessage, setErrorMessage] = useState(''); // Mensaje de error
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        

        try {
            // Realizar la solicitud de inicio de sesión al backend
            const response = await axios.post('http://localhost:3000/api/auth/login', { nombreUsuario: username, passwd: password }, { credentials: 'include' });

            // Manejar la respuesta exitosa del backend
            const userDetails = response;
            console.log('Inicio de sesión exitoso:', userDetails);

            // Restablecer los campos de entrada
            setUsername('');
            setPassword('');

            // Obtener el token de la respuesta del backend
            const token = userDetails.data.details.token;


            //localStorage
            const { id,
                nombreUsuario,
                email,
                nombre,
                apellido,
                isAdmin,
                idFacultad
            } = userDetails.data.details;

            const userData = {
                id,
                nombreUsuario,
                email,
                nombre,
                apellido,
                isAdmin,
                idFacultad
            };

            const userDataJSON = JSON.stringify(userData);
            localStorage.setItem('user_data', userDataJSON);




            // Establecer el token en la cookie
            Cookies.set('access_token', token, { expires: 7, path: '/' });

            // Establecer el estado de inicio de sesión exitoso para redireccionar
            setLoggedIn(true);


        } catch (error) {
            // Manejar errores de inicio de sesión
            console.log('Error de inicio de sesión:', error);

            // Establecer el mensaje de error
            setErrorMessage('Usuario o contraseña incorrectas');
        }
    };

    // Redirigir al usuario al dashboard si está autenticado
    useEffect(() => {
        if (loggedIn) {
            navigate('/docente/dashbord');
        }
    }, [loggedIn]);


    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 shadow-lg border-gray-100">
                <h1 className="text-5xl font-semibold">Welcome Back</h1>
                <p className="font-medium text-lg text-gray-500 mt-4">Welcome back! Please enter your details.</p>
                <div className="mt-8">
                    {errorMessage && (
                        <p className="text-red-500 text-sm mt-2">
                            {errorMessage}
                        </p>
                    )}
                    <div className="flex flex-col">
                        <label className="text-lg font-medium">Usename</label>
                        <input
                            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                            placeholder="Enter your username"

                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col mt-4">
                        <label className="text-lg font-medium">Password</label>
                        <input
                            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                            placeholder="Enter your password"

                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                        />
                    </div>
                    <div className="mt-8 flex flex-col gap-y-4">
                        <button
                            onClick={handleSubmit}
                            className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg">
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;
