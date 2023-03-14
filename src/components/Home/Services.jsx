import { impressos } from '../../utils/services'
import { digitais } from '../../utils/digitais'
import { brindes } from '../../utils/brindes'
import { instalacoes } from '../../utils/instalacoes'
import Carousel  from "./Carousel"

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto mt-40 mb-52">
      <h2 className="text-white text-center uppercase text-2xl font-black">
        Divulgue para seu <br />
        negócio ter sucesso
      </h2>

      {/* Impressos */}
      <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 text-center mt-28">
        <div className="mb-10 lg:col-span-1 justify-center flex items-center">
          <h3 className="text-white text-center uppercase text-xl font-black">
            Impressos
          </h3>
        </div>
        <div className="grid grid-cols-2 w-full px-10 lg:col-span-2 lg:grid-cols-4">
          {impressos.map(item => (
            <div
              className="py-4 bg-gradient-to-tl from-grayCard to-blueCard m-3 flex flex-col justify-center items-center rounded-md"
              key={item.nome}
            >
              <img
                className="w-9 py-4 flex flex-1"
                src={item.src}
                alt={item.nome}
              />
              <p className="text-white text-center text-sm font-regular w-[80%] leading-5">
                {item.nome}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Digitais */}
      <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 text-center mt-28">
        <div className="mb-10 lg:mb-0 lg:col-span-1 lg:col-start-3 lg:row-start-1 justify-center flex items-center">
          <h3 className="text-white text-center uppercase text-xl font-black">
            Digitais
          </h3>
        </div>
        <div className="grid grid-cols-2 px-10 w-full lg:col-start-1 lg:col-span-2 lg:grid-cols-4">
          {digitais.map(item => (
            <div
              className="py-4 bg-gradient-to-tl from-grayCard to-blueCard m-3 flex flex-col justify-center items-center rounded-md"
              key={item.nome}
            >
              <img
                className="w-9 py-4 flex flex-1"
                src={item.src}
                alt={item.nome}
              />
              <p className="text-white text-center text-sm font-regular w-[80%] leading-5">
                {item.nome}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Brindes */}
      <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 text-center mt-28">
        <div className="mb-10 lg:col-span-1 justify-center flex items-center">
          <h3 className="text-white text-center uppercase text-xl font-black">
            Brindes
          </h3>
        </div>
        <div className="grid grid-cols-2 w-full px-10 lg:col-span-2 lg:grid-cols-4">
          {brindes.map(item => (
            <div
              className="py-4 bg-gradient-to-tl from-grayCard to-blueCard m-3 flex flex-col justify-center items-center rounded-md"
              key={item.nome}
            >
              <img
                className="w-9 py-4 flex flex-1"
                src={item.src}
                alt={item.nome}
              />
              <p className="text-white text-center text-sm font-regular w-[80%] leading-5">
                {item.nome}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Instalacoes */}
      <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 text-center mt-28">
        <div className="mb-10 lg:mb-0 lg:col-span-1 lg:col-start-3 lg:row-start-1 justify-center flex items-center">
          <h3 className="text-white text-center uppercase text-xl font-black">
            Instalações
          </h3>
        </div>
        <div className="grid grid-cols-2 px-10 w-full lg:col-start-1 lg:col-span-2 lg:grid-cols-4">
          {instalacoes.map(item => (
            <div
              className="py-4 bg-gradient-to-tl from-grayCard to-blueCard m-3 flex flex-col justify-center items-center rounded-md"
              key={item.nome}
            >
              <img
                className="w-9 py-4 flex flex-1"
                src={item.src}
                alt={item.nome}
              />
              <p className="text-white text-center text-sm font-regular w-[80%] leading-5">
                {item.nome}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-64">
        <h2 className="text-white text-center uppercase text-2xl font-black">
          Alguns serviços realizados
        </h2>
        <div className='mt-20 max-w-full'>
          <Carousel />
        </div>
      </div>
    </section>
  )
}
