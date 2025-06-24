import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import Navbar from "./components/Navbar"
import './index.css';
import Hero from "./components/Hero";
gsap.registerPlugin(ScrollTrigger, SplitText)
function App() {
  return (
    <main className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <div className="h-dvh bg-black" ></div>
    </main>
  )
}

export default App
