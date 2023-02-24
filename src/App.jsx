import { Footer } from './components/Footer'
import { Header } from './components/Header'
import Marks from './components/Marks'
import QuemSomos from './components/QuemSomos'
import { Services } from './components/Services'

import './styles/global.css'

function App() {

  return (
    <>
      <Header />
      <Services />
      <QuemSomos />
      <Marks />
      <Footer />
    </>
  )
}

export default App
