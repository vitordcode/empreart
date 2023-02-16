import { useState } from 'react'
import { List, X } from 'phosphor-react'

import logo from '../assets/img/logo.svg'
import lampada from '../assets/img/lampada.svg'

export function Header() {
  const [menuMobile, setMenuMobile] = useState(false)

  const toggleMenu = () => {
    setMenuMobile(current => !current)
  }

  return (
    <header className="w-full  h-screen relative">
      <div className="fixed top-0 w-full">
        <div className="flex justify-between items-center max-w-6xl mx-auto px-8 py-4">
          <a href="#" className="">
            <img className="w-" src={logo} alt="Logo EmpreART" />
          </a>
          <nav className="flex justify-between items-center">
            <button id="menu" className="lg:hidden" onClick={toggleMenu}>
              {menuMobile ? (
                <X size={32} className="text-white" />
              ) : (
                <List size={32} className="text-white" />
              )}
            </button>

            <ul
              role="menubar"
              className={` ${
                menuMobile ? 'flex' : 'hidden'
              } flex-col gap-4 absolute right-0 left-0 top-16 shadow-xl text-center text-lg lg:flex lg:flex-row lg:items-center lg:justify-end text-white lg:relative lg:top-0 lg:shadow-none`}
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
      </div>

      <section className="h-screen flex flex-col-reverse justify-center items-center">
        <div className="py-12">
          <h1 className="text-white font-extrabold uppercase text-2xl">Você tem a <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange to-yellow'>Ideia</span><br></br> Nós temos a <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange to-yellow'>Solução</span></h1>
        </div>
        <img className="w-64" src={lampada} alt="Lampada Header" />
      </section>
    </header>
  )
}
