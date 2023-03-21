import { Link } from "react-scroll"

import logo from "../../../assets/logo.svg"

export function Footer() {
  return (
    <footer className="w-full" id="footer">
      <div className="max-w-6xl px-10 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-white flex flex-col">
            <Link 
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              id="logo"
            >
              <img src={logo} alt="Logo EmpreART" />
            </Link>
          </div>

          <div className="text-white flex flex-col">
            <h5 className="font-medium md:pt-0 pt-4 text-lg">Páginas</h5>
            <ul>
              <Link>
                <Link 
                activeClass="active"
                to="header"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                className="opacity-60 font-light text-sm" href="">
                  Inicio
                </Link>
              </Link>
              <li>
                <Link 
                activeClass="active"
                to="servicos"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                className="opacity-60 font-light text-sm" href="">
                  Serviços
                </Link>
              </li>
              <li>
                <Link 
                activeClass="active"
                to="quemSomos"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                className="opacity-60 font-light text-sm" href="">
                  Quem somos
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-white flex flex-col text-lg">
            <h5 className="font-medium md:pt-0 pt-4">Serviços</h5>
            <ul>
              <li>
                <span className="opacity-60 font-light text-sm" href="">
                  Impressos
                </span>
              </li>
              <li>
                <span className="opacity-60 font-light text-sm" href="">
                  Digitais
                </span>
              </li>
              <li>
                <span className="opacity-60 font-light text-sm" href="">
                  Brindes
                </span>
              </li>
              <li>
                <span className="opacity-60 font-light text-sm" href="">
                  Instalações
                </span>
              </li>
            </ul>
          </div>

          <div className="text-white flex flex-col">
            <h5 className="font-medium md:pt-0 pt-4 pb-1 text-lg">Contato</h5>
            <span className="opacity-60 font-light text-sm pb-1">
              (17) 99682-0989
            </span>
            <span className="opacity-60 font-light text-sm">
              empreart@hotmail.com
            </span>
          </div>
        </div>

        <hr class="h-px my-8 bg-gray-600 border-0 dark:bg-grayCard"></hr>

        <div className="w-full text-center">
          <span className="text-white text-center pb-4 text-sm opacity-60 font-light">
            EMPREART 2023. Desenvolvido por{' '}
            <a href="" className="font-medium">
              Vitor de Paula.
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}