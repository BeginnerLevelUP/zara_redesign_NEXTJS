
import Image from "next/image"
import line from "@/public/homePageAssets/Line.png"
const Home = () => {
  return (
   <>
    {/* Container */}
    <div className="w-screen h-full">
        {/* Nav */}
        <nav className="flex justify-between p-16 list-none tracking-[1.25rem]">
            <li>
                <div className="flex">
                    <div className="flex flex-col mr-8 space-y-4">
                        <Image src={line} alt="line" className="h-1 w-20"></Image>
                        <Image src={line} alt="line" className="h-1 w-12 "></Image>                      
                    </div>
                    <p>Menu</p>
                </div>
            </li>
            <li>SRCH</li>
            <li>
                <div className="flex">
                    <Image src={line} alt="line" className="h-1 my-auto mx-4"></Image>
                    <Image src={line} alt="line" className="h-1 w-12 my-auto mx-6 "></Image>
                    <p>CART</p>
                    <p>3</p>
                </div>     
            </li>
        </nav>

    </div>
   </>
  )
}

export default Home