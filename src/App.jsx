import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import Navbar from "./components/Navbar"
import './index.css';
import Hero from "./components/Hero";
import Foods from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";

gsap.registerPlugin(ScrollTrigger, SplitText)
function App() {
 

  return (
    <main className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <Foods/>
     <About/>
     <Art/>
     <Menu/>
    </main>
  )
}

export default App
