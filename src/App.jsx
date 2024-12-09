import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./Components/Navbar";
import Banner from './Components/Banner';
import AboutUs from './Components/Aboutus';
import Skills from './Components/Skill';
import Edicationcard from './Components/Educationcard';
import Education from './Components/Education';
import ProjectSection from './Components/ProjectSection';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import DisableRightClick from './Components/DisableRightClick';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DisableRightClick />
    <div>
     <Navbar/>
     </div>
     <Banner/>
  <div>
      <AboutUs/>
      <Skills/>
    <Education/>
<ProjectSection/>
<ContactForm/>
    </div>
    <div>
      <Footer/>
    </div>

   
    </>
  )
}

export default App
