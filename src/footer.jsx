import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { LuMailPlus } from "react-icons/lu"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-around items-center">
          <div className="text-gray-600 text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Jam Dev. All rights reserved.
          </div>
          <div className="flex justify-center space-x-4">
            <a href="https://www.instagram.com/mammajam_" className="text-blue-500 hover:text-blue-700">
              <FaInstagram size={24} />
            </a>
            <a href="https://wa.me/231881983209" className="text-blue-500 hover:text-blue-700">
              <FaWhatsapp size={24} />
            </a>
            <a href="mailto:jammamadou@gmail.com" className="text-blue-500 hover:text-blue-700">
              <LuMailPlus size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer