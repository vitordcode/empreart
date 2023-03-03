import { impressos, digitais, brindes, instalacoes  } from "../utils/index"



export function Services() {
  return (
    <section className="max-w-6xl mx-auto py-16 mt-12 mb-40">
      <div className="flex justify-center">
        <h2 className="text-center text-3xl lg:text-4xl font-extrabold w-[60%] lg:w-[40%] lg:leading-[2.8rem] mx-auto uppercase text-white">
          Divulgue para seu negócio ter sucesso
        </h2>
      </div>

      {/* Impressos */}
      <div className="pt-28 flex flex-col items-center md:grid md:grid-cols-3">
        <div className="pb-16 md:col-span-1 justify-center flex items-center">
          <div className="inline-block">
            <h3 className="font-bold uppercase text-white text-2xl lg:text-3xl">
              Impressos
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full px-10 md:col-span-2 md:grid-cols-4">
          {impressos.map((item) => (
            <div
              className="py-4 bg-gradient-to-tl from-grayCard to-blueCard m-3 flex flex-col justify-center items-center rounded-md"
              key={item.name}
            >
              <img
                className="w-9 py-4 flex flex-1"
                src={item.url}
                alt={item.name}
              />
              <p className="text-white text-center text-sm font-regular w-[60%] leading-5">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Digitais */}
      <div className="pt-28 flex flex-col items-center md:grid md:grid-flow-col md:grid-rows-1 md:grid-cols-3">
        <div className="pb-16 md:pb-0 md:col-span-1 justify-center flex items-center">
          <div className="inline-block">
            <h3 className="font-bold uppercase text-white text-center text-2xl lg:text-3xl z-10">
              Digitais
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2 px-10 w-full md:col-span-2 md:col-start-1 md:grid-cols-4">
          {digitais.map((item) => (
            <div
              className="py-4 bg-gradient-to-tl from-grayCard to-blueCard m-3 flex flex-col justify-center items-center rounded-md"
              key={item.name}
            >
              <img
                className="w-9 py-4 flex flex-1"
                src={item.url}
                alt={item.name}
              />
              <p className="text-white text-center text-sm font-regular w-[80%] leading-5">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Brindes */}
      <div className="pt-28 flex flex-col items-center md:grid md:grid-cols-3">
        <div className="pb-16 md:pb-0 md:col-span-1 justify-center flex items-center">
          <div className="inline-block">
            <h3 className="font-bold uppercase text-white text-2xl lg:text-3xl z-10">
              Brindes
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full px-10 md:col-span-2 md:grid-cols-4">
          {brindes.map((item) => (
            <div
              className="py-4 bg-gradient-to-tl from-grayCard to-blueCard m-3 flex flex-col justify-center items-center rounded-md"
              key={item.name}
            >
              <img
                className="w-9 py-4 flex flex-1"
                src={item.url}
                alt={item.name}
              />
              <p className="text-white text-center text-sm font-regular w-[80%] leading-5">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Instalações */}
      <div className="pt-28 flex flex-col items-center md:grid md:grid-flow-col md:grid-rows-1 md:grid-cols-3">
        <div className="pb-16 md:pb-0 md:col-span-1 justify-center flex items-center">
          <div className="inline-block">
            <h3 className="font-bold uppercase text-white text-center text-2xl lg:text-3xl z-10">
              Instalações
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2 px-10 md:col-span-2 md:col-start-1 md:grid-cols-4 w-full">
          {instalacoes.map((item) => (
            <div
              className="py-4 bg-gradient-to-tl from-grayCard to-blueCard m-3 flex flex-col justify-center items-center rounded-md"
              key={item.name}
            >
              <img
                className="w-9 py-4 flex flex-1"
                src={item.url}
                alt={item.name}
              />
              <p className="text-white text-center text-sm font-regular w-[80%] leading-5">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
