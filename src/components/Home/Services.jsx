import { useState, useRef } from "react"
import Modal from "react-modal"

import { impressos } from '../../utils/impressos'
import { digitais } from '../../utils/digitais'
import { brindes } from '../../utils/brindes'
import { instalacoes } from '../../utils/instalacoes'

import Carousel from './Carousel'

import bgText from '../../../assets/bg-text.png'
import circleYellow from '../../../assets/circles-yellow.svg'
import circle from '../../../assets/circle.svg'

Modal.setAppElement("#root")

export default function Services() {

  const [ modalIsOpen, setModalIsOpen ] = useState(false)
  const [ selectedItem, setSelectedItem ] = useState({})

  function openModal(item) {
    setModalIsOpen(true)
    setSelectedItem(item)
    console.log(selectedItem, item)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  return (
    <section className="max-w-7xl mx-auto mt-20" id="servicos">
      <div className="relative">
        <img
          className="absolute left-0 right-0 mx-auto top-0 bottom-0 my-auto w-56 "
          src={bgText}
          alt=""
        />
        <h2 className="text-white text-center uppercase text-2xl md:text-3xl w-[60%] mx-auto font-black h2-image relative">
          Divulgue para seu negócio ter sucesso
        </h2>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal Serviços"
        overlayClassName="modal-overlay"
        className="text-center bg-grayCard px-8 py-12 flex flex-col items-center m-12 rounded-md text-white"
      >
        <img src={selectedItem.src} alt="" />

        <h2 className=" font-medium text-lg pt-6 pb-2">{selectedItem.nome}</h2>
        <p className="font-light text-sm mb-6">{selectedItem.description}</p>
        <button className="bg-gradient-to-tr from-orange to-yellow px-6 py-2" onClick={closeModal}>Fechar</button>
      </Modal>

      {/* Impressos */}
      <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 text-center mt-28">
        <div className="mb-10 lg:col-span-1 justify-center flex items-center">
          <div className="relative">
            <img
              className="absolute w-14 left-[-26px] top-[-1rem] bot z-0"
              src={circle}
              alt=""
            />
            <img
              className="absolute right-[-12px] z-0 bottom-3 w-6"
              src={circleYellow}
              alt=""
            />
            <h3 className="text-white text-center uppercase text-xl md:text-2xl font-black z-10">
              Impressos
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full px-10 lg:col-span-2 md:grid-cols-3 lg:grid-cols-4">
          {impressos.map(item => (
            <div
              onClick={() => openModal(item)}
              className="py-4 bg-gradient-to-tl from-grayCard to-blueCard m-3 flex flex-col cursor-pointer justify-center items-center rounded-md"
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
          <div className="relative">
            <img
              className="absolute left-[-12px] z-0 bottom-3 w-6"
              src={circleYellow}
              alt=""
            />
            <img
              className="absolute w-14 right-[-26px] top-[-1rem] bot z-0"
              src={circle}
              alt=""
            />
            <h3 className="text-white text-center uppercase text-xl md:text-2xl font-black z-10">
              Digitais
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2 px-10 w-full lg:col-start-1 lg:col-span-2 md:grid-cols-3 lg:grid-cols-4">
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
          <div className="relative">
            <img
              className="absolute w-14 left-[-26px] top-[-1rem] bot z-0"
              src={circle}
              alt=""
            />
            <img
              className="absolute right-[-12px] z-0 bottom-3 w-6"
              src={circleYellow}
              alt=""
            />
            <h3 className="text-white text-center uppercase text-xl md:text-2xl font-black z-10">
              Brindes
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full px-10 lg:col-span-2 md:grid-cols-3 lg:grid-cols-4">
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
          <div className="relative">
            <img
              className="absolute left-[-12px] z-0 bottom-3 w-6"
              src={circleYellow}
              alt=""
            />
            <img
              className="absolute w-14 right-[-26px] top-[-1rem] bot z-0"
              src={circle}
              alt=""
            />
            <h3 className="text-white text-center uppercase text-xl md:text-2xl font-black z-10">
              Instalações
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2 px-10 w-full lg:col-start-1 lg:col-span-2 md:grid-cols-3 lg:grid-cols-4">
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

      <div className="mt-40">
        <div className='relative'>
          <img
            className="absolute left-0 right-0 mx-auto top-0 bottom-0 my-auto w-56 "
            src={bgText}
            alt=""
          />
          <h2 className="text-white text-center uppercase text-2xl md:text-3xl w-[60%] mx-auto font-black h2-image relative">
            Alguns serviços realizados
          </h2>
        </div>
        <div className="mt-20 max-w-full">
          <Carousel />
        </div>
      </div>
    </section>
  )
}
