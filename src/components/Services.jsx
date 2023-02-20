import adesivos from '../assets/img/services/adesivos.svg'
import banners from '../assets/img/services/banners.svg'
import calendarios from '../assets/img/services/calendarios.svg'
import cardapios from '../assets/img/services/cardapios.svg'
import cartaoVisita from '../assets/img/services/cartaoVisita.svg'
import cartazes from '../assets/img/services/cartazes.svg'
import comandas from '../assets/img/services/comandas.svg'
import imasGeladeira from '../assets/img/services/imasGeladeira.svg'
import lonas from '../assets/img/services/lonas.svg'
import panfletos from '../assets/img/services/panfletos.svg'
import pastas from '../assets/img/services/pastas.svg'
import receituarios from '../assets/img/services/receituarios.svg'
import recibos from '../assets/img/services/recibos.svg'
import tags from '../assets/img/services/tags.svg'
import taloes from '../assets/img/services/taloes.svg'

let digitais = [
  {
    name: 'Adesivos',
    url: adesivos,
  },
  {
    name: 'Banners',
    url: banners,
  },
  {
    name: 'Calendários',
    url: calendarios,
  },
  {
    name: 'Cardapios',
    url: cardapios,
  },
  {
    name: 'Cartões de Visita',
    url: cartaoVisita,
  },
  {
    name: 'Cartazes',
    url: cartazes,
  },
  {
    name: 'Comandas',
    url: comandas,
  },
  {
    name: 'Imãs de Geladeira',
    url: imasGeladeira,
  },
  {
    name: 'Lonas',
    url: lonas,
  },
  {
    name: 'Panfletos',
    url: panfletos,
  },
  {
    name: 'Pastas',
    url: pastas,
  },
  {
    name: 'Receituarios',
    url: receituarios,
  },
  {
    name: 'Tecibos',
    url: recibos,
  },
  {
    name: 'Tags',
    url: tags,
  },
  {
    name: 'Talões',
    url: taloes,
  },
]

export function Services() {
  return (
    <section className="max-w-6xl mx-auto py-16">
      <div>
        <h2 className="text-center text-3xl font-extrabold max-w-md mx-auto uppercase text-white">
          Divulgue para seu negócio ter sucesso
        </h2>
      </div>

      <div className='pt-28 flex flex-col items-center'>
        <div className='pb-16'>
          <h3 className='font-bold uppercase text-white text-2xl'>Digitais</h3>
        </div>
        <div className="grid grid-cols-2 px-6">
          { digitais.map((item) => (
            <div className="p-4 bg-gradient-to-tr from-grayCard to-blueCard m-4 flex flex-col justify-center items-center rounded-md" key={item.name}>
              <img className='w-12 py-4' src={item.url} alt={item.name} />
              <p className="text-white text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
