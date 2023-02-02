import { Route,Routes } from "react-router-dom"
import DashboardView from '../modules/layouts/dashboard/DashboardView';
import { LoginView } from '../modules/layouts/login/LoginView';
import { Roles } from '../constants/enums/Roles';
import { RequireAuth } from './RequireAuth';
import { UnauthorizedView } from '../modules/layouts/errors/UnauthorizedView';
import { useAuthStore } from '../hooks/store/useAuthStore';
import { useEffect } from 'react';
import { Button } from '@mui/material'
import { AuthStatus } from "../constants/enums/AuthStatus";
import BarView from "../modules/reports/bar/BarView";
import { Panel } from '../modules/panel/Panel';


export const MyTest = () => {
  const { checkingAuth } = useAuthStore()
  return (
    <div>
    Test
    <Button type='button' onClick={() => checkingAuth()} variant='outlined'>
        Probando
    </Button>

</div>
  )
}

export const AppRoutes = () => {
  const { checkingAuth,status,startLogout } = useAuthStore()
  useEffect(() => {
    checkingAuth()
  }, [])
  if(status === AuthStatus.CHECKING){
    return <div>Checking...</div>
  }
  return (
    <Routes>
        <Route path="login" element={<LoginView />} />
        {/* Redirigir a pagina de login o alguna otra  */}
        <Route path="unauthorized" element={<UnauthorizedView />} />
        <Route path="/" element={<RequireAuth allowedRoles={[Roles.ADMIN,Roles.GUEST]} />} >
        {/* INNER CONTENT */}
          <Route path='/' element={<DashboardView  logout={startLogout} />}> 
                <Route path='/' element={<MyTest />} />
                <Route path="/" element={<RequireAuth redirectTo="" allowedRoles={[Roles.ADMIN]} />} >
                  <Route path='/panel' element={<Panel />} />
                </Route>
                <Route path='bar' element={<BarView />} />
          </Route>

        </Route>

       
       
    </Routes>
  )
}
