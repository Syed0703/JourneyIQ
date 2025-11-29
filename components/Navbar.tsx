'use client'
import Image from "next/image"
import logo from "../public/logo.png"


const Navbar = () => {
  return (
    <nav className="flex justify-between w-full h-max bg-gray-100 px-20 text-black  py-6">
        <div className="text-xl font-bold text-orange-600 flex gap-2 items-center">
            <Image src={logo} alt="logo" className="w-8 h-8"/>
            <p>JourneyIQ</p>
        </div>
        <ul className="flex text-md w-[25vw] justify-between">
            <li className="hover:text-orange-600 transition"><a href="#features">Features</a></li>
            <li className="hover:text-orange-600 transition"><a href="#testimonials">Testimonials</a></li>
            <li className="hover:text-orange-600 transition"><a href="#pricing">Pricing</a></li>
            <li className="hover:text-orange-600 transition"><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
