import { useState } from 'react'
import { List, X } from 'phosphor-react'

import logo from '../assets/img/logo.svg'

export function Header() {
  const [ menuMobile, setMenuMobile ] = useState(false)

  const toggleMenu = () => {
    setMenuMobile(current => !current)
  }

  return (
    <header className="w-full px-8 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <a href="#" className="">
          <img className="w-" src={logo} alt="" />
        </a>
        <nav className="flex justify-between items-center">
          <button id="menu" className="lg:hidden" onClick={toggleMenu}>
            {
              menuMobile 
                ? <X size={32} className="text-white" />
                : <List size={32} className="text-white" />
            }
          </button>

          <ul
            role="menubar"
            className={` ${menuMobile ? "flex" : "hidden"} flex-col gap-4 absolute right-0 left-0 top-16 shadow-xl text-center p-6 text-lg lg:flex lg:flex-row lg:items-center lg:justify-end text-white lg:relative lg:top-0 lg:shadow-none`}
          >
            <li role="menuitem" className="py-1 px-6">
              <a href="#">Inicio</a>
            </li>
            <li role="menuitem">
              <a href="#">Serviços</a>
            </li>
            <li role="menuitem">
              <a href="#">Quem somos</a>
            </li>
            <li role="menuitem">
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
