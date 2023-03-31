import { Link } from "react-scroll"
import lampada from "../../../assets/lampada.svg"

import iconRight from "../../../assets/elements/iconRight.svg"
import iconTop from "../../../assets/elements/iconTop.svg"
import bolinhasLeft from "../../../assets/elements/bolinhasLeft.svg"
import lines from "../../../assets/elements/lines.svg"

import whatsapp from "../../../assets/whatsapp.png"

export default function Header() {
  return (
    <>
      <a target="_blank" className="fixed whatsapp bottom-4 right-4 w-10" href="https://api.whatsapp.com/send?phone=5517996820989&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site!!" >
        <img src={whatsapp} alt="" />
      </a>
      <img src={iconRight} className="absolute right-0 top-[60vh] lg:top-[40vh] lg:w-56" alt="" />
      <img src={iconTop} className="absolute left-0 top-[10vh] lg:top-[5vh] lg:w-48" alt="" />
      <img src={bolinhasLeft} className="absolute left-0 top-[40vh] lg:top-[50vh] lg:w-48" alt="" />
      
      <section id="header" className="max-w-7xl flex flex-col justify-center md:items-center lg:justify-between  lg:items-center mx-auto lg:flex-row-reverse relative z-0 px-10 h-screen">
      <div className=" w-fullf lg:flex-1 h-auto">
        <img className="w-[80%] md:w-[85%] lg:w-[70%] mx-auto lg:ml-auto" src={lampada} alt="Logo EmpreART" />
      </div>
      <div className="max-w-xl relative">
        <img src={lines} className="absolute left-28 top-[-42px] w-28 lg:top-[-12rem] lg:w-48" alt="" />
        <h1 className="text-white lg:inline md:text-center uppercase font-black text-2xl md:text-4xl lg:text-5xl lg:leading-[4rem] my-12">Você tem a <span>ideia</span> <br />Nós temos a <span>solução</span></h1>
        <div className="md:flex md:items-center md:justify-center lg:inline-block lg:mt-10">
          <Link activeClass="active"
            to="servicos"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500} 
            className="text-white cursor-pointer hover:bg-gradient-to-bl transition-all bg-gradient-to-tr from-orange to-yellow px-6 py-3 lg:px-12 lg:py-5 lg:text-lg rounded-md" 
            >Serviços</Link>
          <Link 
            activeClass="active"
            to="quemSomos"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            className="text-white hover:bg-white hover:text-gray-900 transition-all cursor-pointer bg-transparent border-2 px-6 py-[12px] lg:px-12 lg:py-[18px] ml-2 md:ml-6 lg:text-lg rounded-md"
            >Quem somos</Link>
        </div>
        <img src={lines} className="absolute right-28 lg:left-48 lg:bottom-[-10rem] w-32 lg:w-48" alt="" />
      </div>
    </section>
    </>
  )
}
