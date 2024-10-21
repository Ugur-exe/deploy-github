

import './App.css'
import Analytics from './components/Analytics'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NewSletter from './components/NewSletter'

function App() {


  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <NewSletter />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
