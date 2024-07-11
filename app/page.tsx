"use client"
import { useEffect,useState } from "react";
import Image from "next/image";
import line from "@/public/homePageAssets/Line.png";
import logo from "@/public/homePageAssets/logo.png";
import scroll1 from "@/public/homePageAssets/scroll1.png";
import scroll1b from "@/public/homePageAssets/scroll1b.png";

import scroll2 from "@/public/homePageAssets/scroll2.png";
import scroll2b from "@/public/homePageAssets/scroll2b.png";

import scroll3 from "@/public/homePageAssets/scroll3.png";
import scroll3b from "@/public/homePageAssets/scroll3b.png";

import grain from "@/public/homePageAssets/grainbackground.png";

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
                    setActiveIndex(i); // Set active index based on scroll position
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const changeBarsAppearance = () => {
        const bars = document.querySelectorAll('.bars');
        
        bars.forEach((bar, j) => {
            if (activeIndex  === j) {
                bar.classList.add('opacity-100', 'w-12');
            } else {
                bar.classList.add('opacity-50', 'w-4');
                bar.classList.remove('opacity-100', 'w-12');
            }
        });
    };

    useEffect(() => {
        changeBarsAppearance();
    }, [activeIndex]);


        
  return (
    <>
      {/* Container */}
      <div className="w-screen h-full">
        {/* Nav */}
        <nav className="flex justify-between p-16 list-none tracking-[1.25rem] z-20">
          <li>
            <div className="flex">
              <div className="flex flex-col mr-8 space-y-4">
                <Image src={line} alt="line" className="h-1 w-20" />
                <Image src={line} alt="line" className="h-1 w-12" />
              </div>
              <p>Menu</p>
            </div>
          </li>
          <li>SRCH</li>
          <li>
            <div className="flex">
              <Image src={line} alt="line" className="h-1 my-auto mx-4" />
              <Image src={line} alt="line" className="h-1 w-12 my-auto mx-6" />
              <p>CART</p>
              <p>3</p>
            </div>
          </li>
        </nav>

        <div className="relative min-h-screen overflow-auto">
          {/* Centered Logo */}
          <div className="fixed inset-0 flex items-center justify-center z-10">
            <Image src={logo} alt="logo" />
          </div>

          {/* Main Content */}
          <div className="flex flex-col">
            {/* Banner 1 */}
            <section id='1' className="flex justify-end items-center h-screen w-screen my-4">
              {/* left side */}
              <div className="mr-48">
                <Image src={scroll1} alt="scroll1" />
              </div>

              {/* right side */}
              <div
                style={{ backgroundImage: `url(${grain.src})` }}
                className="h-screen w-1/2 flex justify-center z-0"
              >
                <Image src={scroll1b} alt="scroll1b" />
              </div>
            </section>

            {/* Banner 2 */}
            <section id='2'className="flex justify-end items-center h-screen w-screen my-4">
              {/* left side */}
              <div className="mr-48">
                <Image src={scroll2} alt="scroll1" />
              </div>

              {/* right side */}
              <div
                style={{ backgroundImage: `url(${grain.src})` }}
                className="h-screen w-1/2 flex justify-center z-0"
              >
                <Image src={scroll2b} alt="scroll1b" />
              </div>
            </section>

            {/* Banner 3 */}
            <section id='3'className="flex justify-end items-center h-screen w-screen my-4">
              {/* left side */}
              <div className="mr-48">
                <Image src={scroll3} alt="scroll1" />
              </div>

              {/* right side */}
              <div
                style={{ backgroundImage: `url(${grain.src})` }}
                className="h-screen w-1/2 flex justify-center z-0"
              >
                <Image src={scroll3b} alt="scroll1b" />
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="flex tracking-[1.25rem] z-20 bottom-0 items-center justify-evenly fixed w-full my-8">
            <div className="rotate-90 space-y-2">
              <Image src={line} alt="line" className="h-1 w-4 mx-auto opacity-50 bars"  />
              <Image src={line} alt="line" className="h-1 w-4 mx-auto opacity-50 bars" />
              <Image src={line} alt="line" className="h-1 w-4 mx-auto opacity-50 bars" />
            </div>
            <p className="self-center">Shop</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home