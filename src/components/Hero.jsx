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
  return (
<>
<section id='hero' className='noisy' >
<h1 className='title  md:mt-42 mt-50 text-5xl md:text-[10vw] leading-none text-center font-modern-negra ' >TRUFFIQ</h1>
<img src="/images/hero-left-leaf.png" alt="left-image" className='left-image' />
<img src="/images/hero-right-leaf.png" alt="right-image" className='right-image' />
<div className='body' >
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

</>

  )
}

export default Hero
