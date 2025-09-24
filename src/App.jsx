import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import LogoSection from './components/LogoSection'
import Help from './components/Help';
import Latest from './components/Latest';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <LogoSection/>
      <Help/>
      <Latest/>
      <Team/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
