import { marks } from "../utils/Marks";

export default function Marks() {
  return (
    <section className="w-full py-40">
      <div className="max-w-6xl mx-auto  px-10">
        <h2 className="text-white font-extrabold uppercase text-center text-2xl pb-20 ">
          Marcas que confiam em nosso trabalho
        </h2>

        <div className="w-full overflow-hidden">
          <div className="slide-calc ">
            <div className="flex items-center gap-4">
              {marks.map(mark => {
                return (
                  <img
                    className="w-36 pointer-events-none"
                    src={mark}
                    key={mark}
                    alt="Logo de nossos Parceiros"
                  />
                )
              })}

              {marks.map(mark => {
                return (
                  <img
                    className="w-36 pointer-events-none"
                    src={mark}
                    key={mark}
                    alt="Logo de nossos Parceiros"
                  />
                )
              })}
            </div>npm run dev
            
          </div>
        </div>
      </div>
    </section>
  )
}
