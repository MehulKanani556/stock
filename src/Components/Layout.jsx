import React, { useState } from 'react'
// import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {

    const [offToggle, setOffToggle] = useState(false)

    return (
        <div className="flex h-screen">
            {/* Sidebar - 30% width */}
            <div className={`${offToggle ? 'w-16' : 'w-[18%]'} transition-all duration-300 bg-black text-white p-5`}>
                <Sidebar offToggle={offToggle} setOffToggle={setOffToggle} />
            </div>

            {/* Main Content - 70% width */}
            <div className="w-[70%] flex flex-col">
                <Header setOffToggle={setOffToggle} />
                <div className="flex-1 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout
