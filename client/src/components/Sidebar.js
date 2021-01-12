import React from 'react';
import { FaTimes } from 'react-icons';
import { useGlobalContext } from './context';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    return (
        <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
            <div className="sidebar">
                <div className="sidebar-header">
                    <button className="close-btn" onClick={closeSidebar}>
                        <FaTimes />
                    </button>
                </div>
            </div>
            <ul className="sidebar-links">
                <a href="#home">Home</a>
                <a href="#about-me">About Me</a>
                <a href="#skills">Skills</a>
                <a href="#organizations">Education and Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact" onClick={() => alert('I\'m so sorry. Contact section is still in development.')}>Contact</a>
            </ul>
        </aside>
    );
}

export default Sidebar;
