import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import LogoSection from './components/LogoSection'
import Help from './components/Help';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <LogoSection/>
      <Help/>

    </div>
  )
}

export default App
