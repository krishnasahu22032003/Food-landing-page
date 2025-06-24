import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
    useGSAP(()=>{
const heroSplit= new SplitText('.title',{type:'chars,words'})
const paragraphSplit= new SplitText('.subtitle',{type:'lines'})

heroSplit.chars.forEach((char)=>char.classList.add('text-gradient'))
gsap.from(heroSplit.chars,{
    yPercent:100,
    duration:1.8,
    ease:'expo.out',
    stagger:0.05   
})
gsap.from(paragraphSplit.lines,{
    opacity:0,
        yPercent:100,
    duration:1.8,
    ease:'expo.out',
    stagger:0.06  ,
    delay:0.7
})
gsap.timeline({
    scrollTrigger:{
        trigger:'#hero',
        start:'top top',
        end:'bottom top',
        scrub:true
    }
})
.to('.right-image',{y:200},0)
.to('.left-image',{y:-200},0)

    },[])
useGSAP(() => {
  const isMobile = window.innerWidth <= 768;

  // Entry animation from bottom
  gsap.fromTo(
    ".main-img",
    {
      y: 200,
      opacity: 0,
      scale: 0,
    },
    {
      y: 0,
      opacity: 1,
      scale: isMobile ? 1.2 : 1.4,
      duration: 3.0,
      ease: "expo.out",
    }
  );

  // Parallax on mouse move (desktop only)
  if (!isMobile) {
    const mainImg = document.querySelector(".main-img");

    window.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 15; // -20 to 20
      const yMove = (e.clientY / window.innerHeight - 0.5) * 18; // -10 to 10

      gsap.to(mainImg, {
        x: xMove,
        y: yMove,
        duration: 0.8,
        ease: "power2.out",
      });
    });
  }
}, []);




  return (
<>
<section id='hero' className='noisy' >
<h1 className='title  md:mt-33 mt-50 text-5xl md:text-[13vw] z-20 leading-none text-center font-modern-negra ' >TRUFFIQ</h1>
<img src="/images/hero-left-leaf.png" alt="left-image" className='left-image' />
<img src="/images/hero-right-leaf.png" alt="right-image" className='right-image' />
  <div className="absolute top-75  inset-0 flex justify-center items-center z-10 pointer-events-none">
    <img
      src="/images/main.png"
      alt="main"
      className="main-img w-[28vw]  max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
    />
  </div>
<div className='body z-20' >
<div className='content'>
<div className='space-y-5 hidden md:block' >
<p>Lorem, ipsum dolor.</p>
<p className='subtitle' >sip the taste <br />of summer</p>
</div>
<div className='view-cocktails'>
<p className='subtitle' >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, repellat.
</p>
<a href="#cocktails" >Lorem, ipsum.</a>
</div>
</div>
</div>
</section>
{/* <div className='video absolute inset-0' >
<img src="/images/main.png" alt="main-image" />
</div> */}
</>

  )
}

export default Hero
