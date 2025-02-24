import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className='w-full h-20 bg-white flex flex-row justify-between items-center px-10 shadow-xl fixed top-0 left-0 right-0 z-40'>
            <h1 className='text-blue-500 font-bold text-3xl'>Jam Dev.</h1>

            {/* Mobile menu button */}
            <div className='md:hidden'>
                <button onClick={toggleMobileMenu} className='text-gray-500 focus:outline-none'>
                    {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                </button>
            </div>

            {/* Navigation links */}
            <ul className={`md:flex flex-row gap-4 text-gray-500 ${isMobileMenuOpen ? 'flex flex-col absolute top-20 right-0 bg-white w-full py-4 px-10 text-center' : 'hidden'}`}>
                <li className=''><Link to='/' onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                <li className=''><Link to='/about' onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
            </ul>
        </header>
    );
};

export default Header;