import { marks } from "../utils/Marks";

export default function Marks() {
  return (
    <section className="w-full py-40">
      <div className="max-w-6xl mx-auto  px-10">
        <h2 className="text-white font-extrabold uppercase text-center text-2xl pb-20 ">
          Marcas que confiam em nosso trabalho
        </h2>

        <div className="w-full overflow-hidden relative">
          <div className="slide-calc track ">
            <div className="flex items-center gap-4 overflow-hidden">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
