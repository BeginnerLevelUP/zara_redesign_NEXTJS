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
            src2: scroll1b,
            title:"COLOUR BLOCK FAUX",
            des:"SUEDE T-SHIRT",
            price:"$15",
        },
        {
            src1: scroll2,
            src2: scroll2b,
            title:"SATIN FINISH PLAYSUIT",
            des:"Dress",
            price:"$26",
        },
        {
            src1: scroll3,
            src2: scroll3b,
            title:"DOUBLE-BREASTED",
            des:"LINEN BLAZER",
            price:"$26",
        }
    ];


const MBody = () => {
  return (
    <>
{
  promo.map((pro, index) => (
    <section key={index} id={`${index}`} className="relative w-screen h-screen -z-10 mobileView">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${pro.src2.src})` }}
      ></div>
      {/* Body */}
      <div className="relative flex flex-col justify-center items-center min-h-screen space-y-10">
        <Image
          src={pro.src1}
          alt="ForeFront Image"
          width={300}
          height={300}
          className="mx-auto"
        />
        <div className="text-center">
          <p>{pro.title}</p>
          <p>{pro.des}</p>
          <p>{pro.price}</p>
        </div>
      </div>
    </section>
  ))
}
    </>
  );
};


export default MBody