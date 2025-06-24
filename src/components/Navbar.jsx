import { Navlinks } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
     useGSAP(() => {
	const navTween = gsap.timeline({
	 scrollTrigger: {
		trigger: 'nav',
		start: 'bottom top'
	 }
	});
	
	navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
	 backgroundColor: '#00000050',
	 backgroundFilter: 'blur(10px)',
	 duration: 1,
	 ease: 'power1.inOut'
	});
 })
  return (
    <nav className="fixed top-0 left-0 z-50 w-full" >
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-0 py-5  lg:pt-0 lg:px-40 px-5 container mx-auto">
      <a href="#home" className="flex items-center cursor-pointer text-nowrap md:text-base text-sm">
  <img
    src="/images/logo.png"
    alt="logo1"
    className="w-30  h-24 "
  />

</a>
        <ul className="flex justify-center items-center  lg:gap-12 gap-7">
          {Navlinks.map((link) => (
            <li key={link.id}>
              <a className="cursor-pointer text-nowrap md:text-base text-sm" href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
