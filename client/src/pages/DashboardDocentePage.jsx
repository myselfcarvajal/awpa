import DashboardDocente from '../components/DashboardDocente'
import DataTable from '../components/DataTableDocente'
import Navbar from '../components/Navbar'

export default function DashboardDocentePage() {
  return (
    <div>
     <Navbar/>
     <DashboardDocente/>
     <DataTable/>
    </div>
  )
}
