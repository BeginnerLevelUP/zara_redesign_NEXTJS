import Image from "next/image";
import line from "@/public/homePageAssets/Line.png";
import logo from "@/public/homePageAssets/logo.png";
import grain from "@/public/homePageAssets/grainbackground.png";
import scroll1 from "@/public/homePageAssets/scroll1.png";
import scroll1b from "@/public/homePageAssets/scroll1b.png";
import scroll2 from "@/public/homePageAssets/scroll2.png";
import scroll2b from "@/public/homePageAssets/scroll2b.png";
import scroll3 from "@/public/homePageAssets/scroll3.png";
import scroll3b from "@/public/homePageAssets/scroll3b.png";

    const promo = [
        {
            src1: scroll1,
            src2: scroll1b
        },
        {
            src1: scroll2,
            src2: scroll2b
        },
        {
            src1: scroll3,
            src2: scroll3b
        }
    ];


const MBody = () => {
  return (
    <>
      {/* Container */}
      <div className="w-screen h-screen">
        {/* Background Image */}
        <Image
          src={scroll1b}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
        <div className="h-1/2 w-1/2 bg-cover">
          <p>hi</p>
        </div>
      </div>
    </>
  );
};


export default MBody