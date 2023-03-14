import lampada from "../../../assets/lampada.svg"

export default function Header() {
  return (
    <section className="max-w-7xl flex flex-col justify-center md:items-center lg:justify-between  lg:items-center mx-auto lg:flex-row-reverse relative z-0 px-10 h-screen">
      <div className=" w-fullf lg:flex-1 h-auto">
        <img className="w-[80%] md:w-[85%] lg:w-[70%] mx-auto lg:ml-auto" src={lampada} alt="Logo EmpreART" />
      </div>
      <div className="max-w-xl">
        <h1 className="text-white lg:inline md:text-center uppercase font-black text-3xl md:text-4xl lg:text-5xl lg:leading-[4rem] my-12">Você tem a <span>ideia</span> <br />Nós temos a <span>solução</span></h1>
        <div className="md:flex md:items-center md:justify-center lg:inline-block lg:mt-10">
          <a className="text-white bg-gradient-to-tr from-orange to-yellow px-8 py-3 lg:px-12 lg:py-5 lg:text-lg rounded-md" href="#">Serviços</a>
          <a className="text-white bg-transparent border-2 px-8 py-[12px] lg:px-12 lg:py-[18px] ml-6 lg:text-lg rounded-md" href="#">Quem somos</a>
        </div>
      </div>
    </section>
  )
}
