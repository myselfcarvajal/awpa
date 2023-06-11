// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import DocentePublicaciones from './DocentePublicaciones'


// const SideBarAdmin = () => {
//     const [loggedIn, setLoggedIn] = useState(false);
//     const [mostrarPublicaciones, setMostrarPublicaciones] = useState(false);

//     useEffect(() => {
//         // Verificar si hay información de usuario en el Local Storage
//         const userDataJSON = localStorage.getItem('user_data');
//         const loggedIn = userDataJSON !== null;

//         setLoggedIn(loggedIn);
//     }, []);

//     const handleLogout = () => {
//         // Limpiar la información de usuario en el Local Storage y establecer loggedIn en falso
//         localStorage.removeItem('user_data');
//         // Borrar la cookie estableciendo su valor en vacío y fecha de expiración pasada
//         document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//         setLoggedIn(false);
//     };

//     const handleMostrarPublicaciones = () => {
//         setMostrarPublicaciones(true);
//     };



//     return (
//         <div class="flex h-screen w-16 flex-col justify-between border-e bg-white">
//             <div>
//                 <div class="inline-flex h-16 w-16 items-center justify-center">
//                     <span
//                         class="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
//                     >
//                         L
//                     </span>
//                 </div>

//                 <div class="border-t border-gray-100">
//                     <div class="px-2">
//                         <div class="py-4">
//                             <a
//                                 href=""
//                                 class="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
//                             >
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     class="h-5 w-5 opacity-75"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                     stroke-width="2"
//                                 >
//                                     <path
//                                         stroke-linecap="round"
//                                         stroke-linejoin="round"
//                                         d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
//                                     />
//                                     <path
//                                         stroke-linecap="round"
//                                         stroke-linejoin="round"
//                                         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                                     />
//                                 </svg>

//                                 <span
//                                     class="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
//                                 >
//                                     General
//                                 </span>
//                             </a>
//                         </div>

//                         <ul class="space-y-1 border-t border-gray-100 pt-4">

//                             <li>
//                                 <a
//                                     href=""
//                                     class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
//                                 >
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         class="h-5 w-5 opacity-75"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         stroke-width="2"
//                                     >
//                                         <path
//                                             stroke-linecap="round"
//                                             stroke-linejoin="round"
//                                             d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                                         />
//                                     </svg>

//                                     <span
//                                         class="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
//                                     >
//                                         Admins
//                                     </span>
//                                 </a>
//                             </li>

//                             <li>
//                                 <a
//                                     href=""
//                                     class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
//                                 >
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         class="h-5 w-5 opacity-75"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         stroke-width="2"
//                                     >
//                                         <path
//                                             stroke-linecap="round"
//                                             stroke-linejoin="round"
//                                             d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                                         />
//                                     </svg>

//                                     <span
//                                         class="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
//                                     >
//                                         Docentes
//                                     </span>
//                                 </a>
//                             </li>

//                             <li>
//                                 <a
//                                     href=""
//                                     class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
//                                 >
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         class="h-5 w-5 opacity-75"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         stroke-width="2"
//                                     >
//                                         <path
//                                             stroke-linecap="round"
//                                             stroke-linejoin="round"
//                                             d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
//                                         />
//                                     </svg>

//                                     <span
//                                         class="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
//                                     >
//                                         Publicaciones
//                                     </span>
//                                 </a>
//                             </li>

//                             <li>
//                                 <a
//                                     href=""
//                                     class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
//                                 >
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         class="h-5 w-5 opacity-75"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         stroke-width="2"
//                                     >
//                                         <path d="M6 9h12M6 15h12M4 5h2M4 9h2M4 15h2M4 19h2M10 5h10M10 9h10M10 15h10M10 19h10" />
//                                     </svg>

//                                     <span
//                                         class="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
//                                     >
//                                         Facultades
//                                     </span>
//                                 </a>
//                             </li>

//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             <div class="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
//                 <Link to="/">
//                     <button onClick={handleLogout}
//                         type="submit"
//                         class="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             class="h-5 w-5 opacity-75"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             stroke-width="2"
//                         >
//                             <path
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                                 d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//                             />
//                         </svg>

//                         <span
//                             class="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
//                         >
//                             Logout
//                         </span>
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     )
// }

// export default SideBarAdmin



// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import DocentePublicaciones from './DocentePublicaciones'


// const SideBarAdmin = () => {
//     const [loggedIn, setLoggedIn] = useState(false);
//     const [mostrarPublicaciones, setMostrarPublicaciones] = useState(false);
//     const [selectedItem, setSelectedItem] = useState(null);

//     const handleItemClick = (item) => {
//         setSelectedItem(item);
//     };

//     useEffect(() => {
//         // Verificar si hay información de usuario en el Local Storage
//         const userDataJSON = localStorage.getItem('user_data');
//         const loggedIn = userDataJSON !== null;

//         setLoggedIn(loggedIn);
//     }, []);

//     const handleLogout = () => {
//         // Limpiar la información de usuario en el Local Storage y establecer loggedIn en falso
//         localStorage.removeItem('user_data');
//         // Borrar la cookie estableciendo su valor en vacío y fecha de expiración pasada
//         document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//         setLoggedIn(false);
//     };

//     const handleMostrarPublicaciones = () => {
//         setSelectedItem("Publicaciones");
//     };

//     const handleMostrarAdmins = () => {
//         setSelectedItem("Admins");
//     };

//     const handleMostrarDocentes = () => {
//         setSelectedItem("Docentes");
//     };

//     const handleMostrarFacultades = () => {
//         setSelectedItem("Facultades");
//     };



//     return (
//         <div class='max-w-4xl max-h-4xl px-8 py-4 mx-auto mb-4 bg-white rounded-lg shadow-md dark:bg-gray-100'>
//             {/* <div className="flex-grow dark:bg-gray-800">
//                 {selectedItem === "Admins" && (
//                     <div>Contenido de Admins</div>
//                 )}
//                 {selectedItem === "Docentes" && (
//                     <div>Contenido de Docentes</div>
//                 )}
//                 {selectedItem === "Publicaciones" && (
//                     <div>Contenido de Publicaciones</div>
//                 )}
//                 {selectedItem === "Facultades" && (
//                     <div>Contenido de Facultades</div>
//                 )}
//             </div> */}


//             <div class="flex h-screen w-16 flex-col justify-between border-e bg-white">
//                 <div>
//                     <div class="inline-flex h-16 w-16 items-center justify-center">
//                         <span
//                             class="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
//                         >
//                             L
//                         </span>
//                     </div>

//                     <div class="border-t border-gray-100">
//                         <div class="px-2">
//                             <div class="py-4">
//                                 <a
//                                     href=""
//                                     class="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
//                                 >
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         class="h-5 w-5 opacity-75"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         stroke-width="2"
//                                     >
//                                         <path
//                                             stroke-linecap="round"
//                                             stroke-linejoin="round"
//                                             d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
//                                         />
//                                         <path
//                                             stroke-linecap="round"
//                                             stroke-linejoin="round"
//                                             d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                                         />
//                                     </svg>

//                                     <span
//                                         class="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
//                                     >
//                                         General
//                                     </span>
//                                 </a>
//                             </div>

//                             <ul class="space-y-1 border-t border-gray-100 pt-4">

//                                 <li>
//                                     <Link
//                                         to='/admin/dashbord/admins'
//                                         href=""
//                                         className={`group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 ${selectedItem === 'admins' ? 'bg-gray-50 text-gray-700' : ''
//                                             }`}
//                                         onClick={() => handleItemClick('admins')}
//                                     >
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             class="h-5 w-5 opacity-75"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             stroke-width="2"
//                                         >
//                                             <path
//                                                 stroke-linecap="round"
//                                                 stroke-linejoin="round"
//                                                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                                             />
//                                         </svg>

//                                         <span
//                                             class="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
//                                         >
//                                             Admins
//                                         </span>
//                                     </Link>
//                                 </li>

//                                 <li>
//                                     <Link
//                                         to='/admin/dashbord/docentes'
//                                         className={`group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 ${selectedItem === 'docentes' ? 'bg-gray-50 text-gray-700' : ''
//                                             }`}
//                                         onClick={() => handleItemClick('docentes')}
//                                     >
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             class="h-5 w-5 opacity-75"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             stroke-width="2"
//                                         >
//                                             <path
//                                                 stroke-linecap="round"
//                                                 stroke-linejoin="round"
//                                                 d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                                             />
//                                         </svg>

//                                         <span
//                                             class="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
//                                         >
//                                             Docentes
//                                         </span>
//                                     </Link>
//                                 </li>

//                                 <li>
//                                     <Link
//                                         to='/admin/dashbord/publicaciones'
//                                         className={`group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 ${selectedItem === 'publicaciones' ? 'bg-gray-50 text-gray-700' : ''
//                                             }`}
//                                         onClick={() => handleItemClick('publicaciones')}
//                                     >
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             class="h-5 w-5 opacity-75"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             stroke-width="2"
//                                         >
//                                             <path
//                                                 stroke-linecap="round"
//                                                 stroke-linejoin="round"
//                                                 d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
//                                             />
//                                         </svg>

//                                         <span
//                                             class="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
//                                         >
//                                             Publicaciones
//                                         </span>
//                                     </Link>
//                                 </li>

//                                 <li>
//                                     <Link
//                                         to='/admin/dashbord/facultades'
//                                         className={`group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 ${selectedItem === 'facultades' ? 'bg-gray-50 text-gray-700' : ''
//                                             }`}
//                                         onClick={() => handleItemClick('facultades')}
//                                     >
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             class="h-5 w-5 opacity-75"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             stroke-width="2"
//                                         >
//                                             <path d="M6 9h12M6 15h12M4 5h2M4 9h2M4 15h2M4 19h2M10 5h10M10 9h10M10 15h10M10 19h10" />
//                                         </svg>

//                                         <span
//                                             class="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
//                                         >
//                                             Facultades
//                                         </span>
//                                     </Link>
//                                 </li>

//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
//                     <Link to="/">
//                         <button onClick={handleLogout}
//                             type="submit"
//                             class="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
//                         >
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 class="h-5 w-5 opacity-75"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 stroke-width="2"
//                             >
//                                 <path
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                     d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//                                 />
//                             </svg>

//                             <span
//                                 class="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
//                             >
//                                 Logout
//                             </span>
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>


//     )
// }

// export default SideBarAdmin



import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DocentePublicaciones from './DocentePublicaciones'
import AdminPublicationComp from './AdminPublicationComp';
import AdminDocentesComp from '../components/AdminDocentesComp'
import AdminPublicationCompButton from './AdminPublicationCompButton';
import AdminfacultadesComp from './AdminfacultadesComp';
import AdminFacultadCompButton from './AdminFacultadCompButton';


const SideBarAdmin = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [mostrarPublicaciones, setMostrarPublicaciones] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

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

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    // const handleMostrarPublicaciones = () => {
    //     setSelectedItem("Publicaciones");
    // };

    // const handleMostrarAdmins = () => {
    //     setSelectedItem("Admins");
    // };

    // const handleMostrarDocentes = () => {
    //     setSelectedItem("Docentes");
    // };

    // const handleMostrarFacultades = () => {
    //     setSelectedItem("Facultades");
    // };      


    return (
        <div className='flex'>
            <div class="flex h-screen w-16 flex-col justify-between border-e bg-white">
                <div>
                    <div class="inline-flex h-16 w-16 items-center justify-center">
                        <span
                            class="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
                        >
                            L
                        </span>
                    </div>

                    <div class="border-t border-gray-100">
                        <div class="px-2">
                            <div class="py-4">
                                <Link
                                    to='#'

                                    className={`group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 ${selectedItem === 'General' ? 'bg-gray-50 text-gray-700' : ''}`}
                                    onClick={() => handleItemClick('General')}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>

                                    <span
                                        class="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"

                                    >
                                        General
                                    </span>
                                </Link>
                            </div>

                            <ul class="space-y-1 border-t border-gray-100 pt-4">

                                {/* <li>
                                    <Link
                                        to='#'
                                        href=""
                                        className={`group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 ${selectedItem === 'Admins' ? 'bg-gray-50 text-gray-700' : ''}`}
                                        onClick={() => handleItemClick('Admins')}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 opacity-75"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>

                                        <span
                                            class="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                        >
                                            Admins
                                        </span>
                                    </Link>
                                </li> */}

                                <li>
                                    <Link
                                        to='#'
                                        className={`group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 ${selectedItem === 'Docentes' ? 'bg-gray-50 text-gray-700' : ''}`}
                                        onClick={() => handleItemClick('Docentes')}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 opacity-75"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>

                                        <span
                                            class="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                        >
                                            Docentes
                                        </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to='#'
                                        className={`group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 ${selectedItem === 'Publicaciones' ? 'bg-gray-50 text-gray-700' : ''}`}
                                        onClick={() => handleItemClick('Publicaciones')}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 opacity-75"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                            />
                                        </svg>

                                        <span
                                            class="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                        >
                                            Publicaciones
                                        </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to='#'
                                        className={`group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 ${selectedItem === 'Facultades' ? 'bg-gray-50 text-gray-700' : ''}`}
                                        onClick={() => handleItemClick('Facultades')}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 opacity-75"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path d="M6 9h12M6 15h12M4 5h2M4 9h2M4 15h2M4 19h2M10 5h10M10 9h10M10 15h10M10 19h10" />
                                        </svg>

                                        <span
                                            class="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                        >
                                            Facultades
                                        </span>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div class="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
                    <Link to="/">
                        <button onClick={handleLogout}
                            type="submit"
                            class="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 opacity-75"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                            </svg>

                            <span
                                class="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                            >
                                Logout
                            </span>
                        </button>
                    </Link>
                </div>
            </div>

            <div className="flex-grow dark:bg-gray-40">
                {selectedItem === "General" && (
                    <header>
                        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                            <div class="sm:flex sm:items-center sm:justify-between">
                                <div class="text-center sm:text-left">
                                    <h1 className="text-2xl font-bold text-gray-900 sm:text-6xl">
                                        Welcome Back, {localStorage.getItem('user_data') ? JSON.parse(localStorage.getItem('user_data')).nombre : 'Guest'}!
                                    </h1>

                                    <p class="mt-1.5 text-lg text-gray-500">
                                        Let's start managing the platform! 🎉
                                    </p>
                                </div>
                            </div>
                        </div>
                    </header>
                )}
                {selectedItem === "Admins" && (
                    <h1>Contenido de Admins</h1>
                )}
                {selectedItem === "Docentes" && (
                    <>
                        <div className='text-center text-gray-700 text-6xl font-bold font-mono text- py-2 px-6 rounded my-4'>Gestionar Docentes</div>
                        <AdminPublicationCompButton />
                        <AdminDocentesComp />
                    </>
                )}
                {selectedItem === "Publicaciones" && (
                    <>
                        <div className='text-center text-gray-700 text-6xl font-bold font-mono text- py-2 px-6 rounded my-4'>Gestionar Publicaciones</div>
                        <AdminPublicationComp />
                    </>
                )}
                {selectedItem === "Facultades" && (
                    <>
                        <div className='text-center text-gray-700 text-6xl font-bold font-mono text- py-2 px-6 rounded my-4'>Gestionar Facultades</div>
                        <AdminFacultadCompButton />
                        <AdminfacultadesComp />
                    </>
                )}
            </div>
        </div>
    )
}

export default SideBarAdmin

