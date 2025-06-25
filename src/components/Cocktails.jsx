import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { cocktailLists, mockTailLists } from '../../constants/index.js';

gsap.registerPlugin(ScrollTrigger);

const Cocktails = () => {
  useGSAP(() => {
  const animateLeaf = (selector, x, y) => {
    const el = document.querySelector(selector);
    if (!el) return;

    gsap.from(el, {
      x,
      y,
      opacity: 0,
      ease: 'power4.out',
      duration: 1.8,
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  };

  animateLeaf('#c-left-leaf', -500, 300);
  animateLeaf('#c-right-leaf', 500, 300);
  animateLeaf('#c-left-leaf-desktop', -500, 300);
  animateLeaf('#c-right-leaf-desktop', 500, 300);

  // H1 animation
  gsap.from('#cocktails-title', {
    opacity: 0,
    y: 80,
    scale: 1,
    duration: 1.4,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#cocktails',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });

  // Ramen image animation
 gsap.from('#ramen-image', {
  opacity: 0,
  y: 100,
  scale: 0.6,
  rotate: 15,
  skewX: 8,
  duration: 1.8,
  ease: 'elastic.out(1, 0.4)', // nice bounce feel
  scrollTrigger: {
    trigger: '#cocktails',
    start: 'top 85%',
    toggleActions: 'play none none reverse',
  },
});

}); 


  return (
    <section id="cocktails" className="noisy pt-0 relative pb-40 px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h1 id="cocktails-title" className="text-center font-modern-negra text-yellow text-3xl mt-10 md:text-5xl mb-8">
          Slurp Into the Future of Flavor
        </h1>

        <div className="list flex flex-col md:flex-row items-start justify-between gap-10 pt-2">
          <div className="popular w-full md:w-1/3 px-4">
            <h2>Fan-Favorite Bowls</h2>
            <ul>
              {cocktailLists.map(({ name, country, detail, price }) => (
                <li key={name}>
                  <div className="md:me-28">
                    <h3>{name}</h3>
                    <p>
                      {country} | {detail}
                    </p>
                  </div>
                  <span>- {price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="center-logo w-full md:w-1/3 flex flex-col items-center justify-center text-center px-4">
            <img
            id="ramen-image"
              src="/images/ramenbowl.png"
              className="w-[160px] md:w-85 h-auto z-10"
              alt="center-logo"
            />
          </div>

          <div className="loved w-full md:w-1/3 px-4">
            <h2>Most Loved Sips</h2>
            <ul>
              {mockTailLists.map(({ name, country, detail, price }) => (
                <li key={name}>
                  <div className="me-28">
                    <h3>{name}</h3>
                    <p>
                      {country} | {detail}
                    </p>
                  </div>
                  <span>- {price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom leaf images inside section for mobile visibility */}
        <div className="relative w-full mt-10 md:hidden">
          <img
            src="/images/food-left-leaf.png"
            alt="l-leaf"
            id="c-left-leaf"
            className="absolute bottom-0 left-0 w-1/3 object-contain"
          />
          <img
            src="/images/food-right-leaf.png"
            alt="r-leaf"
            id="c-right-leaf"
            className="absolute bottom-0 right-0 w-1/3 object-contain"
          />
        </div>
      </div>

      {/* Desktop fixed leaf images - moved inside section */}
      <div className="hidden md:block absolute bottom-0 left-0 z-0">
        <img
          src="/images/food-left-leaf.png"
          alt="l-leaf"
          id="c-left-leaf-desktop"
          className="md:w-65 object-contain"
        />
      </div>
     <div className="hidden md:block absolute bottom-0 right-0 z-0 overflow-visible">
  <img
    src="/images/food-right-leaf.png"
    alt="r-leaf"
    id="c-right-leaf-desktop"
    className="md:w-65 object-contain translate-x-1/4"
  />
</div>
    </section>
  );
};

export default Cocktails;
