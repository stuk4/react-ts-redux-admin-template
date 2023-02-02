import {  useField } from 'formik'
import {  FormControl, FormHelperText, InputLabel, Select, SelectChangeEvent } from '@mui/material';

interface Props  {
    label: string;
    name: string;
    handleOnChange?:(e:SelectChangeEvent<any>) =>void;
    handleOnBlur?:(e:React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>void;
    [x: string]: any;

}
export const MySelectField = ({ label,handleOnBlur,handleOnChange, ...props }: Props ) => {
    const [ fields,metaProps] = useField(props)
    const { error,touched} = metaProps;
    const {onBlur,onChange,...field} = {...fields}
    
    return (
        <FormControl size="small" fullWidth  variant="outlined" >             
            <InputLabel htmlFor={props.name}>{label}</InputLabel>
            <Select
                error={Boolean(error) && touched}
                label={label}
                {...props}
                onBlur={(e) =>{
                    onBlur(e)
                    if(handleOnBlur){
                        handleOnBlur(e)
                    }
                }}
                onChange={(e) =>{
                    onChange(e)
                    if(handleOnChange){
                        handleOnChange(e)
                    }
                }}
                {...field}
                inputProps={{
                    id: props.name,     
                }}
                /> 
                
            {Boolean(error) && touched && <FormHelperText error={Boolean(error) && touched} >{error}</FormHelperText>}
        </FormControl>
    )
}