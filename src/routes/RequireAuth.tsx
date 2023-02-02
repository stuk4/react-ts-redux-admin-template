
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Roles } from '../constants/enums/Roles';
import { useAuthStore } from '../hooks/store/useAuthStore';
import { haveRole } from '../utils/haveRole';

interface RequireAuthProps {
    allowedRoles: Roles[]
    redirectTo?:string
}
// https://www.melivecode.com/

export const RequireAuth = ({allowedRoles,redirectTo="unauthorized"}:RequireAuthProps) => {
    const {user} = useAuthStore()
    const location = useLocation()
    return ( 
        haveRole(user?.roles,allowedRoles)
        ? <Outlet />
        : user
            ? <Navigate  to={`/${redirectTo}`}  state={{from:location}}  replace />
            : <Navigate to="/login" state={{from:location}} replace />
    )
}
