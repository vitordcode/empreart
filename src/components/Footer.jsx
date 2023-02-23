import logo from '../assets/img/logo.svg'

export function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-6xl grid grid-cols-1 gap-4 px-10">
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
          <h5 className="font-medium pt-4">Páginas</h5>
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

        <div className="text-white flex flex-col">
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
          <h5 className="font-medium pt-4 pb-1">Contato</h5>
          <span className="opacity-60 font-light text-sm pb-1">(17) 99682-0989</span>
          <span className="opacity-60 font-light text-sm">empreart@hotmail.com</span>
        </div>

        <hr class="h-px my-8 bg-gray-600 border-0 dark:bg-grayCard"></hr>

        <span className="text-white text-center pb-4 text-sm opacity-60 font-light">EmpreART 2023. Desenvolvido por <a href="" className="font-medium">Vitor de Paula.</a></span>
      </div>
    </footer>
  )
}
