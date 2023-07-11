import Navbar from "./components/Home/Navbar"
import Header from "./components/Home/Header"
import Services from "./components/Home/Services"
import Marks from "./components/Home/Marks"
import QuemSomos from "./components/Home/QuemSomos"
import { Footer } from "./components/Home/Footer"
import Numbers from "./components/Home/Numbers"
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <QuemSomos />
      <Numbers />
      <Marks />
      <Footer />
      <Analytics />
    </>
  )
}

export default App
