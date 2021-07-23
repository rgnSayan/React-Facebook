import React from 'react'
import SidebarRow from './SidebarRow'
import FlagIcon from '@material-ui/icons/Flag'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import PeopleIcon from '@material-ui/icons/People'
import StorefrontIcon from '@material-ui/icons/Storefront'
import ChatIcon from '@material-ui/icons/Chat'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import './Sidebar.css'
import { useStateValue } from './StateProvider'
import { ExpandMoreOutlined } from '@material-ui/icons'

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user?.photoURL} alt="" title={user?.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center " />
            <SidebarRow Icon={FlagIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Chats" />
            <SidebarRow Icon={StorefrontIcon} title="Market" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace" />
        </div>
    )
}

export default Sidebar
