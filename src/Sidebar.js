import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { IconButton, Avatar } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar_headerRight">
                <IconButton>
                <DonutLargeIcon  />
                </IconButton>
                <IconButton>
                <ChatIcon  />
                </IconButton>
                <IconButton>
                <MoreVertIcon  />
                </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                    <div className="sidebar__searchContainer">
                        <SearchOutlined />
                        <input placeholder="Search or start new chat" />
                    </div>
                </div>

                <div className="sidebar__chats">
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                </div>
        </div>
    )
}

export default Sidebar
