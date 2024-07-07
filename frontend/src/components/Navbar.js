import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setSticky] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`shadow-md max-md:h-36 w-full z-50 p-4 ${isSticky ? 'fixed top-0 bg-[#fff]' : ''} `}>
            <div className="relative container mx-auto flex justify-between items-center text-[black]">
                <Link to="/"><img src='../../assets/logo.svg' /></Link>
                <div className='relative shadow-lg'>
                    <CiSearch className='text-main-color cursor-pointer absolute left-4 text-[#777] top-1/2 text-2xl -translate-y-1/2' />
                    <input type='text' placeholder='ابحث عن كتابك' className='p-2 sm:w-96 w-48 rounded border border-[#777]' />
                </div>
                <div className="max-md:absolute top-20 right-0 flex space-x-2 justify-between w-64">
                    <div className='flex items-center justify-between cursor-pointer'>
                        <span className='mx-2 block'>خروج</span>
                        <IoLogOut className='text-xl' />
                    </div>
                    <Link to="/login">
                        <div className='flex items-center justify-between cursor-pointer'>
                            <span className='mx-2 block'>الدخول</span>
                            <FaUser className='text-xl' />
                        </div></Link>
                    <div className='flex items-center justify-between cursor-pointer'>
                        <span className='mx-2 block'>المفضلة</span>
                        <MdFavorite className='text-xl' />
                    </div>
                </div>
                <div className="md:hidden max-md:absolute top-20 left-0">
                    <button
                        onClick={toggleMenu}
                        className="focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="shadow-md bg-main-bg z-50 top-36 left-0 md:hidden border-2 rounded absolute top-0 w-full">
                    <a href="/" className="block py-2 px-4 hover:bg-blue-500">الرئيسية </a>
                    <a href="/list" className="block py-2 px-4 hover:bg-blue-500">أقسام الكتب</a>
                    <a href="/search" className="block py-2 px-4 hover:bg-blue-500">البحث عن كتاب</a>
                    <a href="/contact" className="block py-2 px-4 hover:bg-blue-500">إتصل بنا </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
