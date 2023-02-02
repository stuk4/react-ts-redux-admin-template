import {  useField } from 'formik'
import { TextField } from '@mui/material';
interface Props  {
    label: string | undefined;
    name: string;
    handleOnBlur?:(e:React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>void;
    handleOnChange?:(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>void;
    type?: 'text' | 'email' | 'password' | 'search' | 'number' | 'date';
    size?: 'small' | 'medium';
    placeholder?: string;
    [x: string]: any;

}
export const MyTextField = ({ label,handleOnBlur,handleOnChange,size="small", ...props }: Props ) => {
    const [ fields,metaProps] = useField(props)
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
            error={Boolean(error) && touched}
            helperText={Boolean(error) && touched && error}
            size={size}
            label={label}
            autoComplete="nope"
        />
    )
}
