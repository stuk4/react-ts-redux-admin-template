import { IconButton, Toolbar } from '@mui/material'
import { Drawer } from '../Drawer'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import { Menu } from './Menu';

interface SideBarProps {
    open:boolean;
    toggleDrawer:()=>void;
   
}
export const SideBar = ({open,toggleDrawer}:SideBarProps) => {
    
  return (
    <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
        <Menu />
    </Drawer>
  )
}
