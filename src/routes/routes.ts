import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { lazy, LazyExoticComponent } from 'react';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import BarChartIcon from '@mui/icons-material/BarChart';



type JSXComponent = () => JSX.Element;

interface SubMenuRoute {
    name:string;
    submenu?: SubMenuRoute[];
}

interface RoutesAdmin {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    subMenu?: RoutesAdmin[];
}


const BarView = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../modules/reports/bar/BarView'));



// export const routesAdmin: RoutesAdmin[] = [
//     {
//         path: '/lazyload/*',
//         to: '/lazyload/',
//         Component:  BarView,
//         name: 'LazyLayout - Dash'
//     },
// ]


interface INavigation {
  sidebar: Sidebar[];
}

interface Sidebar {
  name:    string;
  to:      string;
  icon:OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string;}
  subMenu?: SubMenu[];

}

interface SubMenu {
  name: string;
  to:   string;
  icon:OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string;}
}



export const navigation:INavigation = {
  sidebar: [
    {
      name: 'Panel',
      to: '/panel',
      icon:CandlestickChartIcon,
      
    },
    {
      name: 'Reports',
      to: '/reports',
      icon:BarChartIcon,
      subMenu:[
        {
          name: 'Bar',
          to: '/bar',
          icon:BarChartIcon,
        }
      ]
    },
    {
      name: 'Reports 2',
      to: '/reports2',
      icon:BarChartIcon,
      subMenu:[
        {
          name: 'Bar 2',
          to: '/bar2',
          icon:BarChartIcon,
        }
      ]
    }
    
   
  ]
}
