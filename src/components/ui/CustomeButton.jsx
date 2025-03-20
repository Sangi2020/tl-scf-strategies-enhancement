import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function CustomeButton({ title, link, newTab = false }) {
  return (
    <Link 
      href={link ? link : '/contact-us'}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : ""}
      className="bg-cyan-600 mt-2 sm:mt-2 md:mt-4 text-white font-semibold md:py-3 md:px-4 py-2 px-2 rounded-full inline-flex items-center transition duration-300 ease-in-out hover:bg-cyan-700"
    >
      {title}
      <FaArrowRight className="ml-2" />
    </Link>
  )
}

export default CustomeButton
