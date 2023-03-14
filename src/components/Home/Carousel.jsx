import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { slideServices } from '../../utils/slideServices'

export default function Carousel() {
  const  settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Slider { ...settings }>
      {slideServices.map(item => (
        <div
          className="py-4 flex flex-col justify-center items-center rounded-md text-center"
          key={item.id}
        >
          <img
            className="w-[70%] mx-auto mb-3"
            src={item.image}
            alt={item.nome}
          />
          <h4 className='text-white font-medium text-lg'>{item.title}</h4>
          <span className='text-white opacity-60 text-sm mt-[-16px]'>{item.local}</span>
          <p className="text-white mx-auto w-[80%] mt-3 text-sm font-normal leading-5">
            {item.content}
          </p>
        </div>
      ))}
    </Slider>
  )
}
