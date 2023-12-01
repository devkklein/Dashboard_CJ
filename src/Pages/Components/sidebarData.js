import { icons } from 'antd/es/image/PreviewGroup'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';

export const sidebarData = [
    {
        title:"Home",
        icon: <HomeIcon/>,
        link:"/home"
    },
    {
        title:"Userdata",
        icon: <StorageIcon/>,
        link:"/userdata"
    },
    {
        title:"Reports",
        icon: <ReportIcon/>,
        link:"/reports"
    },

    {
        title:"Settings",
        icon: <SettingsIcon/>,
        link:"/settings"
    }
]
   
