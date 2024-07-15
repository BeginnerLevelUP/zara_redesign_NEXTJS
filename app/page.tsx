'use client'
import { useEffect,useState } from "react";
import Image from "next/image";
import line from "@/public/homePageAssets/Line.png";
import DBody from "./components/DesktopBody";
import MBody from "./components/MobileBody";

const Home = () => {
 const [activeIndex, setActiveIndex] = useState<number>(0);
  useEffect( () => {

    (

      async () => {

          const LocomotiveScroll = (await import('locomotive-scroll')).default

          const locomotiveScroll = new LocomotiveScroll();

      }

    )()

  }, [])
useEffect(() => {
    const handleScroll = (className: string) => {
        const sections = document.querySelectorAll(className);

        sections.forEach((section, i) => {
            const secEle=section as HTMLElement
            const sectionTop = secEle.offsetTop;
            const sectionHeight = secEle.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                setActiveIndex(i);
            }
        });
    };

    const scrollListener = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 768) {
            handleScroll('.desktopView');
        } else {
            handleScroll('.mobileView');
        }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
        window.removeEventListener('scroll', scrollListener);
    };
}, [activeIndex]);

    useEffect(() => {
        const changeBarsAppearance = () => {
            const bars = document.querySelectorAll('.bars');

            bars.forEach((bar, j) => {
                if (activeIndex === j) {
                    bar.classList.remove('opacity-50', 'w-4');
                    bar.classList.add('opacity-100', 'w-12');
                } else {
                    bar.classList.add('opacity-50', 'w-4');
                    bar.classList.remove('opacity-100', 'w-12');
                }
            });
        };

        changeBarsAppearance();
    }, [activeIndex]);
        
  return (
    <>
      {/* Container */}
      <div className="w-screen h-full">
        {/* Nav */}
        <nav className="flex justify-between lg:p-16 p-8 list-none lg:tracking-[1.25rem] tracking-[.5rem] z-10 fixed w-full">
          <li>
            <div className="flex">
              <div className="flex flex-col mr-8 space-y-4">
                <Image src={line} alt="line" className="h-1 lg:w-20 w-10" />
                <Image src={line} alt="line" className="h-1 lg:w-12 w-6" />
              </div>
              <p className="lg:flex hidden">Menu</p>
            </div>
          </li>
          <li  className="lg:flex hidden">SRCH</li>
          <li>
            <div className="flex">
              <Image src={line} alt="line" className="h-1 my-auto mx-4 lg:flex hidden" />
              <Image src={line} alt="line" className="h-1 w-12  my-auto mx-6 " />
              <p>CART</p>
              <p>3</p>
            </div>
          </li>
        </nav>
        {/* Desktop */}
        <div className="hidden lg:block md:block">
        <DBody></DBody>
        </div>

        {/* Mobile */}
        <div className="block lg:hideen md:hidden">
        <MBody></MBody>
        </div>
            {/* Footer */}
            <footer className="flex tracking-[1.25rem] z-20 bottom-0 items-center justify-evenly fixed w-full my-8">
                <div className="rotate-[270deg] space-y-2">
                        <Image  src={line} alt={`line-`} className="h-1 w-4 mx-auto opacity-50 bars transition-all" />
                        <Image  src={line} alt={`line-`} className="h-1 w-4 mx-auto opacity-50 bars transition-all" />
                        <Image  src={line} alt={`line-`} className="h-1 w-4 mx-auto opacity-50 bars transition-all" />
                </div>
                <p className="self-center">Shop</p>
            </footer>
        </div>
    </>
  );
};

export default Home