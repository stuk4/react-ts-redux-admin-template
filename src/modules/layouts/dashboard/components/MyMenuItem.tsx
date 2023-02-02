
import ListItemIcon from '@mui/material/ListItemIcon';
import { ListItemButton, ListItemText, SvgIconTypeMap } from '@mui/material';
import { Link } from 'react-router-dom';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface MenuItemProps {
    name: string;
    to: string;
    icon:OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string;}
}

export const MyMenuItem = ({name,to,icon:Icon}:MenuItemProps) => {
  return (
    <Link to={to}  style={{ textDecoration: 'none',color:'inherit' }}>

      <ListItemButton  LinkComponent={Link}  > 

        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </Link>
  )
}
