import React from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List,SvgIconTypeMap } from '@mui/material';
import { Link } from 'react-router-dom';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface SubMenuItemProps {
    parentName: string;
    menus:{
        name:string;
        to:string;
        icon:OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string;};
    }[],
    icon:OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string;};
}

export const SubMenuItem = ({parentName,menus,icon:ParentIcon}:SubMenuItemProps) => {
    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                <ParentIcon/>
            </ListItemIcon>
            <ListItemText primary={parentName} />
            {open ? <ExpandLess /> : <ExpandMore />}

        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component={"div"} disablePadding>
                {
                    menus.map(({name,to,icon:Icon},i)=>(
                        <Link  to={to} key={i}  style={{ textDecoration: 'none',color:'inherit' }}>
                            <ListItemButton key={i+`${name}`}  sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <Icon />
                                    </ListItemIcon>
                                <ListItemText primary={name} />
                            </ListItemButton>
                        </Link>
                    ))
                }
                
            </List>
        </Collapse>
    </>
  )
}
