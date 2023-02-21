import adesivos from '../assets/img/services/impressos/adesivos.svg'
import banners from '../assets/img/services/impressos/banners.svg'
import calendarios from '../assets/img/services/impressos/calendarios.svg'
import cardapios from '../assets/img/services/impressos/cardapios.svg'
import cartaoVisita from '../assets/img/services/impressos/cartaoVisita.svg'
import cartazes from '../assets/img/services/impressos/cartazes.svg'
import comandas from '../assets/img/services/impressos/comandas.svg'
import convites from '../assets/img/services/impressos/convites.svg'
import imasGeladeira from '../assets/img/services/impressos/imasGeladeira.svg'
import lonas from '../assets/img/services/impressos/lonas.svg'
import panfletos from '../assets/img/services/impressos/panfletos.svg'
import pastas from '../assets/img/services/impressos/pastas.svg'
import receituarios from '../assets/img/services/impressos/receituarios.svg'
import recibos from '../assets/img/services/impressos/recibos.svg'
import tags from '../assets/img/services/impressos/tags.svg'
import taloes from '../assets/img/services/impressos/taloes.svg'

let impressos = [
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
    name: 'Convites',
    url: convites,
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
    name: 'Recibos',
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

import cartaoIterativo from '../assets/img/services/digitais/cartaoInterativo.svg'
import logotipo from '../assets/img/services/digitais/logotipo.svg'
import sites from '../assets/img/services/digitais/sites.svg'
import midiaSocial from '../assets/img/services/digitais/midiaSocial.svg'


let digitais = [
  {
    name: 'Cartão interativo digital',
    url: cartaoIterativo,
  },
  {
    name: 'Criação de Logotipos',
    url: logotipo,
  },
  {
    name: 'Criação de Sites',
    url: sites,
  },
  {
    name: 'Pacote de Mídias Sociais',
    url: midiaSocial,
  },
]

import abridores from '../assets/img/services/brindes/abridores.svg'
import baralhos from '../assets/img/services/brindes/baralhos.svg'
import canecas from '../assets/img/services/brindes/canecas.svg'
import canetas from '../assets/img/services/brindes/canetas.svg'
import cobrePlacas from '../assets/img/services/brindes/cobrePlacas.svg'
import lixeira from '../assets/img/services/brindes/lixeira.svg'
import mousePad from '../assets/img/services/brindes/mousePad.svg'
import regua from '../assets/img/services/brindes/regua.svg'

let brindes = [
  {
    name: 'Abridores',
    url: abridores,
  },
  {
    name: 'Baralhos',
    url: baralhos,
  },
  {
    name: 'Canecas',
    url: canecas,
  },
  {
    name: 'Canetas',
    url: canetas,
  },
  {
    name: 'Cobre Placas',
    url: cobrePlacas,
  },
  {
    name: 'lixeiras de Carro',
    url: lixeira,
  },
  {
    name: 'Mouse Pads',
    url: mousePad,
  },
  {
    name: 'Réguas',
    url: regua,
  },
]

import faixadas from '../assets/img/services/instalacao/faixadas.svg'
import outdoor from '../assets/img/services/instalacao/outdoor.svg'
import papelParede from '../assets/img/services/instalacao/papelParede.svg'

const instalacoes = [
  {
    name: 'Faixadas',
    url: faixadas,
  },
  {
    name: 'Outdoors',
    url: outdoor,
  },
  {
    name: 'Papeis de Parede',
    url: papelParede,
  },
]


export function Services() {
  return (
    <section className="max-w-6xl mx-auto py-16">
      <div>
        <h2 className="text-center text-2xl font-extrabold w-[60%] leading-8 mx-auto uppercase text-white">
          Divulgue para seu negócio ter sucesso
        </h2>
      </div>

      <div className='pt-28 flex flex-col items-center'>
        <div className='pb-16'>
          <h3 className='font-bold uppercase text-white text-2xl'>Impressos</h3>
        </div>
        <div className="grid grid-cols-2 w-full px-6">
          { impressos.map((item) => (
            <div className="py-4 bg-gradient-to-tl from-grayCard to-blueCard m-4 flex flex-col justify-center items-center rounded-md" key={item.name}>
              <img className='w-12 py-4 flex flex-1' src={item.url} alt={item.name} />
              <p className="text-white text-center font-regular w-[60%] leading-5">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='pt-28 flex flex-col items-center'>
        <div className='pb-16'>
          <h3 className='font-bold uppercase text-white text-2xl'>Digitais</h3>
        </div>
        <div className="grid grid-cols-2 px-6">
          { digitais.map((item) => (
            <div className="py-4 bg-gradient-to-tl from-grayCard to-blueCard m-4 flex flex-col justify-center items-center rounded-md" key={item.name}>
              <img className='w-12 py-4 flex flex-1' src={item.url} alt={item.name} />
              <p className="text-white text-center font-regular w-[80%] leading-5">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='pt-28 flex flex-col items-center'>
        <div className='pb-16'>
          <h3 className='font-bold uppercase text-white text-2xl'>Brindes</h3>
        </div>
        <div className="grid grid-cols-2 w-full px-6">
          { brindes.map((item) => (
            <div className="py-4 bg-gradient-to-tl from-grayCard to-blueCard m-4 flex flex-col justify-center items-center rounded-md" key={item.name}>
              <img className='w-12 py-4 flex flex-1' src={item.url} alt={item.name} />
              <p className="text-white text-center font-regular w-[80%] leading-5">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='pt-28 flex flex-col items-center'>
        <div className='pb-16'>
          <h3 className='font-bold uppercase text-white text-2xl'>Instalações</h3>
        </div>
        <div className="grid grid-cols-2 px-6 w-full">
          { instalacoes.map((item) => (
            <div className="py-4 bg-gradient-to-tr from-grayCard to-blueCard m-4 flex flex-col justify-center items-center rounded-md" key={item.name}>
              <img className='w-12 py-4 flex flex-1' src={item.url} alt={item.name} />
              <p className="text-white text-center font-regular w-[60%] leading-5">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
