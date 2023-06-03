import { useState } from 'react'
import { Link } from 'react-scroll'
import {  Popover } from '@headlessui/react'

import logo from "../../../assets/logo.svg"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background shadow-md fixed w-full z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex sm:flex-1">
          <Link 
            activeClass="active"
            to="header"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            id="logo"
            className="-m-1.5 p-1.5">
            <span className="sr-only">EmpreART</span>
            <img className="h-8 w-auto" src={logo} alt="Logo EmpreART" />
          </Link>
        </div>
        <Popover.Group className="hidden sm:flex sm:gap-x-12">
          <Link 
          activeClass="active"
          to="servicos"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          onClick={() => setMobileMenuOpen(false)}
          className="text-sm cursor-pointer font-medium leading-6 text-gray-900 sm:text-white">
            Serviços
          </Link>

          <Link  
            activeClass="active"
            to="quemSomos"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm cursor-pointer font-medium leading-6 text-gray-900  sm:text-white">
            Quem Somos
          </Link>
        </Popover.Group>
      </nav>
      
    </header>
  )
}