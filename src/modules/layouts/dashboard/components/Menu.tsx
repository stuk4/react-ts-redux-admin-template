
import { List } from '@mui/material';
import { navigation } from '../../../../routes/routes';
import { MyMenuItem } from './MyMenuItem';
import { SubMenuItem } from './SubMenuItem';

export const Menu = () => {
   const sidebarMenus = navigation.sidebar
  return (
    <List component="nav">


     {
        sidebarMenus.map((menu,i) => {
            if(menu.subMenu){
                return (
                  <SubMenuItem 
                    key={i} 
                    parentName={menu.name} 
                    menus={menu.subMenu} 
                    icon={menu.icon}
                    />
                )
            }
            
            return (
                <MyMenuItem key={i+`${menu.name}`} to={menu.to} name={menu.name} icon={menu.icon} />
            )
        })
     }
    </List>
  )
}
    
