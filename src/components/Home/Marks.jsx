import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { marks } from '../../utils/marks'

export default function Marks() {

  const  settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }

  return (
    <section className="max-w-7xl mx-auto my-40">
      <h2 className="text-white text-center uppercase text-2xl md:text-3xl w-[60%] mx-auto font-black h2-image relative mb-20">
        Marcas que confiam em nosso trabalho
      </h2>
      <div>
        <Slider { ...settings }>
          {marks.map(item => (
            <img className='mx-10 lg:px-2 image' src={item} key={item} alt={item} />
          ))}
        </Slider>
      </div>
    </section>
  )
}
