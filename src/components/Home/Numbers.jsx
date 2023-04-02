import { useState } from 'react'

import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

export default function Numbers() {
  const [counterOn, setCounterOn] = useState(false)

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <section className="max-w-7xl mx-auto my-52">
        <div className="grid grid-cols-1 text-white text-center gap-12 md:grid-cols-3">

          <div className="py-6">
            <div className="flex justify-center items-center">
              <span className="font-medium text-2xl">+</span>
              {counterOn && (
                <CountUp
                  start={0}
                  end={800}
                  duration={5}
                  className="text-orange font-black text-4xl"
                />
              )}
            </div>
            <h3 className="text-xl font-medium">serviços entregues</h3>
          </div>

          <div className="py-6">
            <div className="flex justify-center items-center">
              <span className="font-medium text-2xl">+</span>
              {counterOn && (
                <CountUp
                  start={0}
                  end={5}
                  duration={5}
                  className="text-orange font-black text-4xl"
                />
              )}
            </div>
            <h3 className="text-xl font-medium">anos de experiência</h3>
          </div>

          <div className="py-6">
            <div className="flex justify-center items-center">
              <span className="font-medium text-2xl">+</span>
              {counterOn && (
                <CountUp
                  start={0}
                  end={200}
                  duration={5}
                  className="text-orange font-black text-4xl"
                />
              )}
            </div>
            <h3 className="text-xl font-medium">clientes satisfeitos</h3>
          </div>

        </div>
      </section>
    </ScrollTrigger>
  )
}
