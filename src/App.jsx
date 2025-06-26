import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import Navbar from "./components/Navbar"
import './index.css';
import Hero from "./components/Hero";
import Foods from "./components/Cocktails";
import About from "./components/About";

gsap.registerPlugin(ScrollTrigger, SplitText)
function App() {
 

  return (
    <main>
      <Navbar/>
      <Hero/>
      <Foods/>
     <About/>
    </main>
  )
}

export default App
