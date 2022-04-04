import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { Button } from '@mui/material';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        {/* Twitter logo */}
        <TwitterIcon />
        <SidebarOption active text="Home" Icon={HomeIcon}/>
        <SidebarOption text="Explore" Icon={SearchIcon}/>
        <SidebarOption text="Notifications" Icon={NotificationsActiveIcon}/>
        <SidebarOption text="Messages" Icon={MailOutlineIcon}/>
        <SidebarOption text="Bookmarks" Icon={TurnedInNotIcon}/>
        <SidebarOption text="Lists" Icon={ListAltIcon}/>
        <SidebarOption text="Profile" Icon={PermIdentityIcon}/>
        <SidebarOption text="More" Icon={MoreHorizRoundedIcon}/>

        {/* Home */}
        {/* Explore */}
        {/* notifications */}
        {/* messages */}
        {/* bookmarks */}
        {/* lists */}
        {/* profile */}
        {/* more */}

        {/* Tweet button */}
        <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>

    </div>
  )
}

export default Sidebar