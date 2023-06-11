import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DocentesPage from './pages/DocentesPage'
import FacultadesPage from './pages/FacultadesPage'
import PublicacionesPage from './pages/PublicacionesPage'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage'
import PublicacionPage from './pages/PublicacionPage'
import PublicacionByDocentePage from './pages/PublicacionByDocentePage'
import DashboardDocentePage from './pages/DashboardDocentePage'
import LoginPageAdmin from './pages/LoginPageAdmin'
import DashboardAdminPage from './pages/DashboardAdminPage'
import DataTable from './components/DataTableDocente'
import AdminDashboardPublication from './pages/AdminDashboardPublication'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/publicaciones' element={<PublicacionesPage />}></Route>
        <Route path='/publicaciones/:idPublicacion'element={<PublicacionPage />}></Route>
        <Route path='/docentes' element={<DocentesPage />}></Route>
        <Route path='/docentes/:idDocente/publicaciones'element={<PublicacionByDocentePage />}></Route>
        <Route path='/facultades' element={<FacultadesPage />}></Route>
        <Route path='/docente/login' element={<LoginPage />}></Route>
        <Route path='/docente/dashbord' element={<DashboardDocentePage />}></Route>
        <Route path='/admin/dashbord' element={<DashboardAdminPage />}></Route>
        <Route path='/admin/dashbord/publicaciones' element={<AdminDashboardPublication />}></Route>
        <Route path='/admin/login' element={<LoginPageAdmin />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
