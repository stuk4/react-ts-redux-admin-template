
import { useAppDispatch, useAppSelector } from '../useApp';
import axios from 'axios';
import { ILogin, IResponseLogin } from '../../interfaces/IAuth';
import {  useNavigate } from 'react-router-dom';
import { login, logout } from '../../store/slices';
import moment from 'moment';
import { Roles } from '../../constants/enums/Roles';
import { finishLoading, startLoading } from '../../store/slices/ui/uiSlice';

export const useAuthStore = () => {
    const dispatch = useAppDispatch();
    const {user,status} = useAppSelector((state) => state.auth);
    const navigate = useNavigate()
    const startLogin = async (body:ILogin) =>{
        try {
            dispatch(startLoading())
            const resp = await axios.post<IResponseLogin>('https://www.melivecode.com/api/login',body);
           
            resp.data.user.roles = body.roles;
            localStorage.setItem('token',resp.data.accessToken);

            localStorage.setItem('token-init-date',moment(new Date().getTime()).add(1,'m').unix().toString());
            dispatch(login({
                accessToken:resp.data.accessToken,
                user:resp.data.user,         
            }))
            setTimeout(() => {
                navigate('/')
                dispatch(finishLoading())
            }, 1000);
            
        } catch (error) {
            console.log("Error",error)
            dispatch(finishLoading())
        }
    }
    const startLogout = () =>{
        localStorage.clear();
        dispatch(logout());
    }

    const checkingAuth = async () =>{
        // Verifico  token en local storage
        if(!localStorage.getItem('token')) return dispatch(logout());

        const oldDate = parseInt(localStorage.getItem('token-init-date')||''); 
        if(oldDate < moment(new Date().getTime()).unix()) return dispatch(logout());
        try {
            console.log("CHECKING AUTH")
            // simulating a refresh token service
            const body = {
                username: "karn.yong@melivecode.com",
                password: "melivecode",
                expiresIn: 60000,
                roles: [
                    Roles.ADMIN
                ]
            }
            dispatch(startLoading())
            // Usando sitio melivecode para simular login
            const resp = await axios.post<IResponseLogin>('https://www.melivecode.com/api/login',body);
            resp.data.user.roles = body.roles;
            localStorage.setItem('token',resp.data.accessToken);

            localStorage.setItem('token-init-date',moment(new Date().getTime()).add(1,'m').unix().toString());
            dispatch(login({
                accessToken:resp.data.accessToken,
                user:resp.data.user,         
            }))
            navigate('/')
            
        } catch (error) {
            console.log(error)
            localStorage.clear();
            dispatch(logout());
        }finally{
            dispatch(finishLoading())
        }
    }
     
    return {
        user,
        status,
        // Methods
        startLogin,
        startLogout,
        checkingAuth

    }
}