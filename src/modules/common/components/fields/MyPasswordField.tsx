import {  useField } from 'formik'
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { useState } from 'react';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props  {
    label: string;
    name: string;
    handleOnBlur?:(e:React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>void;
    handleOnChange?:(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>void;
    type?: 'text' | 'email' | 'password' | 'search' | 'number' | 'date';
    size?: 'small' | 'medium' ;
    placeholder?: string;
    [x: string]: any;

}
export const MyPasswordField = ({ label,handleOnBlur,handleOnChange,size="small", ...props }: Props ) => {
    const [ fields,metaProps] = useField(props)
    const [showPassword, setShowPassword] = useState(false)
    const { error,touched} = metaProps;
    const {onBlur,onChange,...field} = {...fields}
    return (
        <TextField
            fullWidth
            {...field}
            {...props}
            onChange={(e) =>{
                onChange(e)
                if(handleOnChange){
                    handleOnChange(e)
                }
            }}
            onBlur={(e) =>{
                onBlur(e)
                if(handleOnBlur){
                    handleOnBlur(e)
                }
            }}
            InputProps={{
              endAdornment: (
                    <InputAdornment
                        position="end"
                    >
                        <IconButton
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye } /> 
                        </IconButton>
                    </InputAdornment>
                )}
            }
            type={showPassword ? 'text' : 'password'}
            error={Boolean(error) && touched}
            helperText={Boolean(error) && touched && error}
            size={size}
            label={label}
            autoComplete="nope"
        />
    )
}
