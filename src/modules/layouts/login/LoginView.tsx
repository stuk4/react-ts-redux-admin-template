import { Button, CssBaseline, MenuItem, ThemeProvider } from '@mui/material';
import { Form, Formik } from 'formik'

import { useLocation } from 'react-router-dom';
import { MyPasswordField } from '../../common/components/fields/MyPasswordField';
import { MyTextField } from '../../common/components/fields/MyTextField';
import {  useAppSelector } from '../../../hooks/useApp';
import { Roles } from '../../../constants/enums/Roles';
import { useAuthStore } from '../../../hooks/store/useAuthStore';
import { MySelectField } from '../../common/components/fields/MySelectField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { mdTheme } from '../../../config/theme/theme';
import { AuthStatus } from '../../../constants/enums/AuthStatus';

export const LoginView = () => {

    const {auth:{user,status},ui:{loading}} = useAppSelector(state => state)
    const location = useLocation();
    
    const {startLogin} = useAuthStore()
    // TODO: TERMINAR DE HAECER LOGIN Y MENU ITEMS DEACUERDO A ROLES
     return (
        <ThemeProvider theme={mdTheme}>
        <CssBaseline />
    
           <div className="login">
            <svg className='login__wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill={mdTheme.palette.secondary.dark} fillOpacity="1" d="M0,288L30,245.3C60,203,120,117,180,96C240,75,300,117,360,160C420,203,480,245,540,261.3C600,277,660,267,720,229.3C780,192,840,128,900,122.7C960,117,1020,171,1080,165.3C1140,160,1200,96,1260,58.7C1320,21,1380,11,1410,5.3L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg>
            <div className="login__container">
                
                <Formik
                        initialValues={{
                            username:"karn.yong@melivecode.com",
                            password:"melivecode",
                            expiresIn: 60000,
                            roles:[Roles.ADMIN]
                        }}
                        onSubmit={(values) =>{
                            console.log(mdTheme.palette.primary)
                           
                            startLogin(values)
                        
                        }}
                    >
                        {
                            (formik:any) =>(
                                <Form 
                                    
                                >
                                    <div className={`login__icon ${loading && status != AuthStatus.AUTHENTICATED && 'login__loading'} ${status === AuthStatus.AUTHENTICATED  &&'login__open' }`} >
                                        <FontAwesomeIcon icon={faLock} />
                                        <FontAwesomeIcon   icon={faLockOpen} />
                                    </div>
                                    <div className="login__from-input">
                                        <MySelectField
                                            name="roles"
                                            label="Roles"
                                            multiple={true}
                                            
                                        >
                                            <MenuItem 
                                                value={Roles.ADMIN}
                                            >
                                                Admin
                                            </MenuItem>
                                            <MenuItem 
                                                value={Roles.GUEST}
                                            >
                                                Guest
                                            </MenuItem>
                                        </MySelectField>
                                    </div>
                                    <div className="login__from-input">
                                        <MyTextField
                                            label="Username"
                                            name="username"
                                            type="email"
                                            size="small"
                                        />
                                    </div>
                                    <div className="login__from-input">
                                        <MyPasswordField 
                                        
                                            label="Password"
                                            name="password"
                                            size="small"

                                        />
                                    </div>
                                    <Button disabled={loading}  variant='contained' color='primary' type='submit' >Login</Button>
                                </Form>
                            )
                        }
                </Formik>
            </div>
            
           </div>
                
            
       
        </ThemeProvider>
    )
}
