"use client"
import React, { useState } from "react"
import logo from "@/public/logo.svg"
import iconMenu from "@/public/icon-hamburger.svg"
import iconMenuClose from "@/public//icon-close.svg"
import Image from "next/image"
import Link from "next/link"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="flex w-full justify-between md:items-center lg:pl-[10.31rem] lg:pr-[8.25rem] lg:pt-[4rem]">
      <div className="ml-8 mt-[2.38rem] lg:ml-0 lg:mt-0">
        <Image src={logo} alt="Logo" />
      </div>
      <div className="fixed z-20 mt-[6.25rem] w-full px-8 md:relative md:ml-auto md:mr-8 md:mt-[2.38rem] md:w-auto md:px-0 lg:mt-0">
        <nav
          className={`w-full rounded-[0.1875rem] bg-white p-6 shadow-[0_5px_10px_0_rgba(0,0,0,0.15)] md:rounded-none md:bg-transparent md:p-0 md:shadow-none ${
            isMenuOpen ? "block" : "hidden md:block"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 text-lg font-bold uppercase leading-6 tracking-[0.075rem] md:flex-row md:gap-[2.62rem] md:text-[0.9375rem] md:tracking-[0.0625rem]">
            <li>
              <Link href="#" className="hover:underline">
                Product
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li className="w-full">
              <span className="block h-[0.0625rem] w-full bg-very-dark-blue/15 md:h-[0.375rem] md:w-[0.375rem] md:rounded-full"></span>
            </li>
            <li>
              <Link href="#" className="opacity-50 hover:underline">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`relative z-30 ml-auto mr-8 mt-[2.62rem] block cursor-pointer md:hidden lg:mr-[10.31rem] lg:mt-[5.56rem] ${
          isMenuOpen ? "" : ""
        }`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <Image src={iconMenuClose} alt="Close Menu" />
        ) : (
          <Image src={iconMenu} alt="Open Menu" />
        )}
      </div>
    </header>
  )
}

export default Header
