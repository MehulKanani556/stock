import React, { useState, useEffect } from 'react'
// import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
    const [offToggle, setOffToggle] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false)

    useEffect(() => {
        // Set initial state based on screen width
        const handleResize = () => {
            setIsCollapsed(window.innerWidth < 768);
        };

        // Set initial state
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex">
            {/* Sidebar - width changes based on collapse state */}
            <div className={`${isCollapsed ? 'w-[15%]sm:w-[8%] xl:w-[5%]' : 'sm:w-[35%] md:w-[30%] lg:w-[22%] xl:w-[18%]'} transition-all duration-300 bg-d_color text-white h-full`}>
                <Sidebar 
                    offToggle={offToggle} 
                    setOffToggle={setOffToggle} 
                    isCollapsed={isCollapsed}
                    setIsCollapsed={setIsCollapsed}
                />
            </div>

            {/* Main Content - width adjusts based on sidebar state */}
            <div className={`${isCollapsed ? 'w-[85%] sm:w-[92%] xl:w-[95%]' : 'sm:w-[65%] md:w-[70%] lg:w-[78%] xl:w-[82%]'} flex flex-col transition-all duration-300`}>
                <Header setOffToggle={setOffToggle} />
                <div className="flex-1 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout
