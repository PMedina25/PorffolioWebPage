import React, { useState } from 'react';

import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';


const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            <div className={'toggle' + (showSidebar ? ' sidebar-active' : '')}  onClick={() => setShowSidebar(!showSidebar)}>
                {showSidebar ?
                    <MdClose className="toggle-icon" /> :
                    <FaBars className="toggle-icon"/>}
            </div>

            <div id='sidebar-menu' className={showSidebar ? 'active' : undefined}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/aboutme">About Me</a></li>
                    <li><a href="/skills">Skills</a></li>
                    <li><a href="/organizations">Education/Experience</a></li>
                    <li><a href="/projects">Projects</a></li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;
