import React, { useRef, useEffect, useState } from "react";
import {ROUTER} from "../../utils/constants";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Header = () => {
    return(
        <nav className="nav_blog" id="blog-nav">
            <div className="nav-blog-inner px-0 sm:px-0 lg:px-0">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/*mobile menu button*/}
                        <button type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                              {/*Icon when menu is closed.*/}
                              {/*Menu open: "hidden", Menu closed: "block"*/}
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>
                              {/*Icon when menu is open.*/}
                              {/*Menu open: "block", Menu closed: "hidden"*/}
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-0 md:ml-0 sm:block">
                            <div className="flex space-x-4">
                                {/*Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"*/}
                                <div className="bg-gray-900 rounded-md pr-4 py-3 text-sm font-medium">
                                    <Link to={ROUTER.HOME} className="nav-link">Home</Link>
                                </div>
                                <div className="text-gray-300 hover:text-gray rounded-md pr-4 py-3 text-sm font-medium">
                                    <Link to={ROUTER.ABOUT} className="nav-link">About</Link>
                                </div>
                                <div className="relative destination-navdrop">
                                    <div className="navdrop-title z-50 text-gray-300 hover:text-gray rounded-md pr-4 py-3 text-sm font-medium">
                                        <Link to={ROUTER.DESTINATION} className="nav-link">Destination</Link>
                                    </div>
                                    <div className="navdrop-inner absolute left-30  w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="block px-4 py-2 text-sm text-gray-700">
                                            <Link to={ROUTER.ABOUT} className="nav-link">About</Link>
                                        </div>
                                        <div className="block px-4 py-2 text-sm text-gray-700">
                                            <Link to={ROUTER.ABOUT} className="nav-link">About</Link>
                                        </div>
                                        <div className="block px-4 py-2 text-sm text-gray-700">
                                            <Link to={ROUTER.ABOUT} className="nav-link">About</Link>
                                        </div>
                                        <div className="block px-4 py-2 text-sm text-gray-700">
                                            <Link to={ROUTER.ABOUT} className="nav-link">About</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-md pr-4 py-3 text-sm font-medium">
                                    <Link to={ROUTER.GALLERY} className="nav-link">Gallery</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-shrink-0 items-center">
                            <img className="h-8 w-auto"
                                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                 alt="Your Company"/>
                        </div>
                    </div>
                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button"
                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/*Mobile menu, show/hide based on menu state.*/}
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {/*Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"*/}
                    <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                       aria-current="page">Home</a>
                    <a href="#"
                       className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</a>
                    <a href="#"
                       className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Destinations</a>
                    <a href="#"
                       className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Gallery</a>
                    <a href="#"
                       className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</a>
                </div>
            </div>
        </nav>

)
}
export default Header;