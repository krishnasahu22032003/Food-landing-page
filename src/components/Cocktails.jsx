import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { cocktailLists, mockTailLists } from '../../constants/index.js'

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: true,
      },
    });

    parallaxTimeline
      .from('#c-left-leaf', {
        x: -100,
        y: 100,
      })
      .from('#c-right-leaf', {
        x: 100,
        y: 100,
      });
  });

  return (
    <section id="cocktails" className="noisy pt-0 relative pb-40 px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h1 className="text-center font-modern-negra text-yellow text-3xl mt-10 md:text-5xl mb-8">
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
          className="md:w-40 object-contain"
        />
      </div>
      <div className="hidden md:block absolute bottom-0 right-0 z-0">
        <img
          src="/images/food-right-leaf.png"
          alt="r-leaf"
          id="c-right-leaf-desktop"
          className="md:w-40 object-contain"
        />
      </div>
    </section>
  );
};

export default Cocktails;
