import React, {useState} from 'react';
import {FaBars, FaHamburger} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    return (
        <div className={"w-full h-[80px] absolute border-b-4 fixed"}>
            <div className={"max-w-[1440px] flex items-center m-auto items-center justify-between px-4 py-6"}>
                <FaHamburger className={nav ? "text-white z-30 md:text-black" : "text-black"} size={30}/>
                <ul className={"hidden md:flex items-center"}>
                    <li className={"px-4 uppercase"}>Home</li>
                    <li className={"px-4 uppercase"}>Order</li>
                    <li className={"px-4 uppercase"}>Menu</li>
                    <li className={"px-4 uppercase"}>Delivery</li>
                    <li className={"px-4 uppercase"}>Contact</li>
                </ul>
                <div className={"cursor-pointer z-30 md:hidden"} onClick={handleNav}>
                    {nav ? <AiOutlineClose className={"text-white "} size={30}/>
                        : <FaBars className={"text-black"} size={30}/>}
                </div>
                <div className={"hidden md:flex"}></div>
            </div>
            <div
                className={nav ? 'fixed bg-black/90 left-0 top-0 w-full h-screen absolute md:hidden'
                    : 'absolute left-[-100%]'}>
                <ul className={"fixed text-white text-2xl top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center"}>
                    <li name="home" className={"m-8 uppercase cursor-pointer"}>Home</li>
                    <li id={"/"} className={"m-8 uppercase cursor-pointer"}>Order</li>
                    <li id={"/"} className={"m-8 uppercase cursor-pointer"}>Menu</li>
                    <li id={"/"} className={"m-8 uppercase cursor-pointer"}>Delivery</li>
                    <li id={"/"} className={"m-8 uppercase cursor-pointer"}>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;