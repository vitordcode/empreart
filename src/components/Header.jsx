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
        <div className="flex justify-between items-center max-w-6xl mx-auto px-8 py-4 bg-background z-40">
          <a href="#">
            <img className="hover:opacity-75" src={logo} alt="Logo EmpreART" />
          </a>
          <nav className="flex justify-between items-center =">
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
              } bg-background flex-col gap-4 absolute right-0 left-0 top-16 shadow-xl text-center text-lg lg:flex lg:flex-row lg:items-center lg:justify-end text-white lg:relative lg:top-0 lg:shadow-none`}
            >
              <li role="menuitem" className="font-light text-md hover:opacity-75">
                <a href="#">Inicio</a>
              </li>
              <li role="menuitem" className="font-light text-md hover:opacity-75">
                <a href="#">Serviços</a>
              </li>
              <li role="menuitem" className="font-light text-md hover:opacity-75">
                <a href="#">Quem somos</a>
              </li>
              <li role="menuitem" className="font-light text-md hover:opacity-75">
                <a href="#">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <section className="px-8 h-screen flex flex-col justify-center md:flex-row-reverse md:items-center md:mx-auto max-w-6xl">
        <img className="w-64 md:w-80 lg:w-96 mx-auto md:mr-0" src={lampada} alt="Lampada Header" />

        <div className=''>
          <h1 className="text-white font-extrabold uppercase text-4xl md:text-4xl lg:text-5xl py-6 ">
            Você tem a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-yellow">
              Ideia
            </span>
            <br></br> Nós temos a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-yellow">
              Solução
            </span>
          </h1>

          <a
            className="text-center bg-gradient-to-r from-orange to-yellow text-white px-6 py-3 rounded-md"
            href="#"
          >
            Nossos Serviços
          </a>
          <a className='border-2 text-white px-6 py-[0.65rem] rounded-md ml-2' href="#">Quem somos</a>
        </div>
      </section>
    </header>
  )
}
