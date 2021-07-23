import React from 'react'
import { Avatar } from '@material-ui/core'
import './SidebarRow.css'

function SidebarRow({ src, title, Icon }) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <span>{title}</span>
        </div>
    )
}

export default SidebarRow
