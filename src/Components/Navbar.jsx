import React, {useState} from 'react';
import {FaBars, FaHamburger} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState(false)
    const handleNav = () => setNav(!nav)

    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? "bg-black text-amber-300 fixed w-full z-30" : "w-full h-[80px] border-b-2 fixed"}>
            <div className={"max-w-[1440px] flex items-center m-auto items-center justify-between px-4 py-6"}>
                <FaHamburger className={nav ? "text-yellow-300 z-20 md:text-white" : "text-yellow-300"} size={30}/>
                <ul className={"hidden md:flex items-center"}>
                    <li className={"px-4 uppercase text-yellow-300"}>Home</li>
                    <li className={"px-4 uppercase text-yellow-300"}>Order</li>
                    <li className={"px-4 uppercase text-yellow-300"}>Menu</li>
                    <li className={"px-4 uppercase text-yellow-300"}>Delivery</li>
                    <li className={"px-4 uppercase text-yellow-300"}>Contact</li>
                </ul>
                <div className={"cursor-pointer z-30 md:hidden px-4"} onClick={handleNav}>
                    {nav ? <AiOutlineClose className={"text-yellow-300"} size={30}/>
                        : <FaBars className={"text-yellow-300"} size={30}/>}
                </div>
                <div className={"hidden md:flex"}></div>
            </div>
            <div
                className={nav ? 'fixed bg-black/90 left-0 top-0 w-full h-screen absolute md:hidden z-10'
                    : 'absolute left-[-100%]'}>
                <ul className={nav ? "text-yellow-300 text-2xl top-0 left-0 w-full h-full flex flex-col " +
                    "items-center justify-center text-center z-30" : "hidden"}>
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