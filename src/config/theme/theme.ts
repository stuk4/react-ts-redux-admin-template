import { createTheme } from "@mui/material";
import { LinkBehavior } from '../../modules/layouts/dashboard/components/LinkBehavior';

export const mdTheme = createTheme({
    palette:{
        primary:{
            main:"#3e4754",
           
        
        },
        secondary:{
            main:"#727CF5",
           
        }
    },
    components:{
        MuiButtonBase:{
            defaultProps:{
                LinkComponent:LinkBehavior
            }
        }
    }
});