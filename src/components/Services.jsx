
import bgText from "../assets/img/bg-text.png";
import circle from "../assets/img/circle.svg";
import circlesYellow from "../assets/img/circles-yellow.svg";

import { impressos } from "../utils/impressos";
import { digitais } from "../utils/digitais";
import { brindes } from "../utils/brindes";
import { instalacoes } from "../utils/instalacoes";



export function Services() {
  return (
    <section className="max-w-6xl mx-auto py-16">
      <div className="relative flex justify-center">
        <img
          src={bgText}
          className="w-64 z-0 absolute top-[-3rem] opacity-70"
          alt="Circle background"
        />
        <h2 className="text-center text-4xl z-10 font-extrabold w-[80%] leading-8 mx-auto uppercase text-white">
          Divulgue para seu negócio ter sucesso
        </h2>
      </div>

      {/* Impressos */}
      <div className="pt-28 flex flex-col items-center md:grid md:grid-cols-3">
        <div className="pb-16 md:col-span-1 justify-center flex items-center">
          <div className="relative inline-block">
            <img
              src={circle}
              className="w-14 z-0 absolute top-[-1.2rem] left-[-1.6rem] opacity-70"
              alt="Circle background"
            />
            <h3 className="font-bold uppercase text-white text-2xl z-10">
              Impressos
            </h3>
            <img
              src={circlesYellow}
              className="w-6 z-0 absolute top-0 right-[-.8rem] opacity-70"
              alt="Circle background"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 w-full px-10 md:col-span-2 md:grid-cols-4">
          {impressos.map((item) => (
            <div
              className="py-4 bg-gradient-to-tl from-grayCard to-blueCard m-4 flex flex-col justify-center items-center rounded-md"
              key={item.name}
            >
              <img
                className="w-12 py-4 flex flex-1"
                src={item.url}
                alt={item.name}
              />
              <p className="text-white text-center font-regular w-[60%] leading-5">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Digitais */}
      <div className="pt-28 flex flex-col items-center md:grid md:grid-flow-col md:grid-rows-1 md:grid-cols-3">
        <div className="pb-16 md:pb-0 md:col-span-1 justify-center flex items-center">
          <div className="relative inline-block">
            <img
              src={circle}
              className="w-14 z-0 absolute top-[-1.2rem] left-[-1.6rem] opacity-70"
              alt="Circle background"
            />
            <h3 className="font-bold uppercase text-white text-center text-2xl z-10">
              Digitais
            </h3>
            <img
              src={circlesYellow}
              className="w-6 z-0 absolute top-0 right-[-.8rem] opacity-70"
              alt="Circle background"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 px-10 md:col-span-2 md:col-start-1 md:grid-cols-4">
          {digitais.map((item) => (
            <div
              className="py-4 bg-gradient-to-tl from-grayCard to-blueCard m-4 flex flex-col justify-center items-center rounded-md"
              key={item.name}
            >
              <img
                className="w-12 py-4 flex flex-1"
                src={item.url}
                alt={item.name}
              />
              <p className="text-white text-center font-regular w-[80%] leading-5">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Brindes */}
      <div className="pt-28 flex flex-col items-center md:grid md:grid-cols-3">
        <div className="pb-16 md:pb-0 md:col-span-1 justify-center flex items-center">
          <div className="relative inline-block">
            <img
              src={circle}
              className="w-14 z-0 absolute top-[-1.2rem] left-[-1.6rem] opacity-70"
              alt="Circle background"
            />
            <h3 className="font-bold uppercase text-white text-2xl z-10">
              Brindes
            </h3>
            <img
              src={circlesYellow}
              className="w-6 z-0 absolute top-0 right-[-.8rem] opacity-70"
              alt="Circle background"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 w-full px-10 md:col-span-2 md:grid-cols-4">
          {brindes.map((item) => (
            <div
              className="py-4 bg-gradient-to-tl from-grayCard to-blueCard m-4 flex flex-col justify-center items-center rounded-md"
              key={item.name}
            >
              <img
                className="w-12 py-4 flex flex-1"
                src={item.url}
                alt={item.name}
              />
              <p className="text-white text-center font-regular w-[80%] leading-5">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Instalações */}
      <div className="pt-28 flex flex-col items-center md:grid md:grid-flow-col md:grid-rows-1 md:grid-cols-3">
        <div className="pb-16 md:pb-0 md:col-span-1 justify-center flex items-center">
          <div className="relative inline-block">
            <img
              src={circle}
              className="w-14 z-0 absolute top-[-1.2rem] left-[-1.6rem] opacity-70"
              alt="Circle background"
            />
            <h3 className="font-bold uppercase text-white text-center text-2xl z-10">
              Instalações
            </h3>
            <img
              src={circlesYellow}
              className="w-6 z-0 absolute top-0 right-[-.8rem] opacity-70"
              alt="Circle background"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 px-10 md:col-span-2 md:col-start-1 md:grid-cols-4">
          {instalacoes.map((item) => (
            <div
              className="py-4 bg-gradient-to-tl from-grayCard to-blueCard m-4 flex flex-col justify-center items-center rounded-md"
              key={item.name}
            >
              <img
                className="w-12 py-4 flex flex-1"
                src={item.url}
                alt={item.name}
              />
              <p className="text-white text-center font-regular w-[80%] leading-5">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
