import React, { useEffect, useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import './CSS/Parth/Header.css';
import Userimage from './Images/Parth/Userimage.png';
import { Menu, MenuButton, MenuItems, MenuItem, Button } from '@headlessui/react';
import notback from './Images/Parth/notification_back_image.png';
import notbackicon from './Images/Parth/notification_icon.png';
import notbacknumber from './Images/Parth/notification_number_back_image.png';
import { MdKeyboardDoubleArrowRight, MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  useEffect(() => {
    // Function to check if screen is large enough to auto-close drawer
    const checkScreenSize = () => {
      if (window.innerWidth >= 768 && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Clean up
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [isDrawerOpen]); // Dependency array includes isDrawerOpen to properly react to its changes
  
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className='V_header_container'>

        <div className='flex items-center V_search_container'>
          <FaSearch className='V_search_icon' />
          <input type="text" placeholder='Search here...' className='V_search_input' />
        </div>

        <div className="flex items-center">
          <div>
            <div className='relative'>
              <img src={notback} alt="" className='V_notification_back_image' />
              <div>
                <img src={notbackicon} alt="" className='V_notification_icon' />
              </div>
              <div>
                <img src={notbacknumber} alt="" className='V_notification_number_image' />
                <div className='V_notification_number_text'>
                  <p>3</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex items-center ms-3'>
              <div>
                <img src={Userimage} alt="" className='V_user_image' />
              </div>
              <div className='ms-3'>
                <p className='V_user_name'>John Patel</p>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white  V_dropdown_text  text-gray-500">
                      Admin
                      <MdOutlineKeyboardArrowDown aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-36 md:w-44 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <div className="">
                      <MenuItem>
                        <a href="#" className="block px-4 py-2 V_dropdown_text text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                          Edit Profile
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a href="#" className="block px-4 py-2 V_dropdown_text text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                          Change Password
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a href="#" className="block px-4 py-2 V_dropdown_text text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                          Logout
                        </a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              </div>

              <div className='md:hidden ms-3 V_offcanvas_btn'>
                <FaBars onClick={toggleDrawer} className='V_ofcanvas_icon'/>
              </div>
              {/* <div className='md:hidden'>
                <Button onClick={openDrawer}>Open Drawer</Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>




      <div
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto bg-d_color w-72  shadow-lg transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <h5 className="inline-flex items-center  text-white">

          LOGO
        </h5>
        <button
          type="button"
          onClick={toggleDrawer}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </button>
      </div>

      {/* Overlay for drawer */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-30"
          onClick={toggleDrawer}
        />
      )}
    </>
  );
};

export default Header