import { NavLink, useLocation, Link } from "react-router-dom";
import { getCart } from "../Ulti/addToDB";
import { useEffect, useState } from "react";
import { FaMobileAlt } from "react-icons/fa";



const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const links = <>
        <li>
            <NavLink to='/' className={({ isActive }) =>
                        isActive
                            ? "text-black font-semibold underline pb-1"
                            : isHomePage
                            ? "text-white"
                            : "text-gray-700"
                    }>Home</NavLink>
                    
                    </li>
        <li><NavLink to='/statistics' className={({ isActive }) =>
                        isActive
                            ? "text-purple-600 font-semibold underline pb-1"
                            : isHomePage
                            ? "text-black"
                            : "text-gray-700"
                    }>Statistics</NavLink></li>
        <li><NavLink to='/dashboard' className={({ isActive }) =>
                        isActive
                            ? "text-purple-600 font-semibold pb-1"
                            : isHomePage
                            ? "text-black"
                            : "text-gray-700"
                    }>Dashboard</NavLink></li>
                      <li><NavLink to='/aboutus' className={({ isActive }) =>
                        isActive
                            ? "text-purple-600 font-semibold pb-1"
                            : isHomePage
                            ? "text-black"
                            : "text-gray-700"
                    }>About Us</NavLink></li>
    </>
    const [products,setProduct] = useState([])
    useEffect(()=>{
        const products = getCart();
        setProduct(products);
    },[])
    
    const homeRoute = location.pathname === '/' || location.pathname.startsWith('/productCards/')

    return (
        <div className={`navbar w-11/12 mx-auto mt-4 flex  md:flex-row  ${ homeRoute ? 'bg-[#9538E2] rounded-t-[24px]' : 'bg-white'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className=''>
                <Link to="/" className="btn btn-ghost text-xl md:text-2xl border-0 focus:outline-none hover:bg-transparent">
                    <span className={  isHomePage ? "flex flex-row text-white" : "text-black flex flex-row"}>
                    <FaMobileAlt />  
                        Gadget Heaven
                    </span>
                </Link>
                </div>
               
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end ">

                <div className="flex-none">
                  <Link to='/dashboard'> 
                  <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-white mb-2 text-black">
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                               
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                           
                        </div>
                    </div>
                  </Link>

                </div>

                <button className="btn btn-ghost btn-circle  ml-2 bg-white mb-2">
                    <Link to='/dashboard'>
                    <div className="indicator">
                        <img src="/wish.png" alt="" />
                      
                    </div>
                    </Link>
                   
                </button>
            </div>
        </div>);
};

export default Navbar;