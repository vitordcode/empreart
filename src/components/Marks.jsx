import acacia from "../assets/img/marks/acacia.png";
import advocacia from "../assets/img/marks/advocacia.png";
import almaJuliana from "../assets/img/marks/almaJuliana.png";
import batataria from "../assets/img/marks/batataria.png";
import cuidarComAmor from "../assets/img/marks/cuidarComAmor.png";
import draCamila from "../assets/img/marks/draCamila.png";
import erikaRuiz from "../assets/img/marks/erikaRuiz.png";
import forma from "../assets/img/marks/forma.png";
import galeano from "../assets/img/marks/galeano.png";
import insenf from "../assets/img/marks/insenf.png";
import kadoch from "../assets/img/marks/kadoch.png";
import mariah from "../assets/img/marks/mariah.png";
import maxvet from "../assets/img/marks/maxvet.png";
import mlife from "../assets/img/marks/mlife.png";
import parra from "../assets/img/marks/parra.png";
import pingoDeGente from "../assets/img/marks/pingoDeGente.png";
import specialle from "../assets/img/marks/specialle.png";
import toqueDeBeleza from "../assets/img/marks/toqueDeBeleza.png";
import vetsPet from "../assets/img/marks/vetsPet.png";

const marks = [
  acacia,
  advocacia,
  almaJuliana,
  batataria,
  cuidarComAmor,
  draCamila,
  erikaRuiz,
  forma,
  galeano,
  insenf,
  kadoch,
  mariah,
  maxvet,
  mlife,
  parra,
  pingoDeGente,
  specialle,
  toqueDeBeleza,
  vetsPet
]



export default function Marks() {
  return (
    <section className="w-full py-40">
      <div className="max-w-6xl mx-auto overflow-hidden">
        <h2 className="text-white font-extrabold uppercase text-center text-2xl pb-20">Marcas que confiam em nosso trabalho</h2>

        <div className="flex items-center px-10 gap-4">
          { marks.map(mark => {
            return (
              <img className="w-36" src={mark} key={mark} alt="Logo de nossos Parceiros" />
            )
          })}
        </div>
      </div>
    </section>
  )
}