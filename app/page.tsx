"use client"
import { useEffect,useState } from "react";
import Image from "next/image";
import line from "@/public/homePageAssets/Line.png";
import Body from "./components/Body";

const Home = () => {
   const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const bars = document.querySelectorAll('.bars');
            
            sections.forEach((section, i) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    setActiveIndex(i)
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    useEffect(() => {
        const changeBarsAppearance = () => {
        const bars = document.querySelectorAll('.bars');
        
        bars.forEach((bar, j) => {
            if (activeIndex  === j) {
                bar.classList.remove('opacity-50', 'w-4');
                bar.classList.add("opacity-100", "w-12",);
                console.log('hello')
            }
            else {
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
        <nav className="flex justify-between lg:p-16 p-8 list-none lg:tracking-[1.25rem] tracking-[.5rem] z-20">
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
        <Body></Body>
      </div>
    </>
  );
};

export default Home