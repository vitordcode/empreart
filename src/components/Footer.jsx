import logo from '../assets/img/logo.svg'

export function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-6xl px-10 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-white flex flex-col">
            <a href="#">
              <img src={logo} alt="Logo EmpreART" />
            </a>
            <h6 className="font-medium pt-4">Segunda a Sexta:</h6>
            <p className="opacity-60 font-light text-sm">8 as 11 - 12 as 18h</p>

            <h6 className="font-medium pt-4">Sábado:</h6>
            <p className="opacity-60 font-light text-sm">9 as 12h</p>
          </div>

          <div className="text-white flex flex-col">
            <h5 className="font-medium pt-4 text-lg">Páginas</h5>
            <ul>
              <li>
                <a className="opacity-60 font-light text-sm" href="">
                  Inicio
                </a>
              </li>
              <li>
                <a className="opacity-60 font-light text-sm" href="">
                  Serviços
                </a>
              </li>
              <li>
                <a className="opacity-60 font-light text-sm" href="">
                  Quem somos
                </a>
              </li>
            </ul>
          </div>

          <div className="text-white flex flex-col text-lg">
            <h5 className="font-medium pt-4">Serviços</h5>
            <ul>
              <li>
                <a className="opacity-60 font-light text-sm" href="">
                  Impressos
                </a>
              </li>
              <li>
                <a className="opacity-60 font-light text-sm" href="">
                  Digitais
                </a>
              </li>
              <li>
                <a className="opacity-60 font-light text-sm" href="">
                  Brindes
                </a>
              </li>
              <li>
                <a className="opacity-60 font-light text-sm" href="">
                  Instalações
                </a>
              </li>
            </ul>
          </div>

          <div className="text-white flex flex-col">
            <h5 className="font-medium pt-4 pb-1 text-lg">Contato</h5>
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
            EmpreART 2023. Desenvolvido por{' '}
            <a href="" className="font-medium">
              Vitor de Paula.
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
