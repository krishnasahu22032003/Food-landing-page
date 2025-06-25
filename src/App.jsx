import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import Navbar from "./components/Navbar"
import './index.css';
import Hero from "./components/Hero";
import Foods from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText)
function App() {
 

  return (
    <main>
      <Navbar/>
      <Hero/>
      <Foods/>
      <div className="bg-black h-400px"  ></div>
    </main>
  )
}

export default App
