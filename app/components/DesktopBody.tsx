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

const DBody = () => {
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

    return (
        <div className="relative min-h-screen overflow-auto">
            {/* Centered Logo */}
            <div className="fixed inset-0 flex items-center justify-center z-10">
                <Image src={logo} alt="logo" />
            </div>

            {/* Main Content */}
            <div className="flex flex-col">
                {/* Render each promo item dynamically */}
                {promo.map((item, index) => (
                    <section key={index} id={`${index}`} className="flex justify-end items-center h-screen w-screen my-4">
                        {/* left side */}
                        <div className="mr-48">
                            <Image src={item.src1} alt={`scroll${index + 1}`} />
                        </div>

                        {/* right side */}
                        <div
                            style={{ backgroundImage: `url(${grain.src})` }}
                            className="h-screen w-1/2 flex justify-center z-0"
                        >
                            <Image src={item.src2} alt={`scroll${index + 1}b`} />
                        </div>
                    </section>
                ))}
            </div>

            {/* Footer */}
            <footer className="flex tracking-[1.25rem] z-20 bottom-0 items-center justify-evenly fixed w-full my-8">
                <div className="rotate-[270deg] space-y-2">
                    {/* Example of rendering bars dynamically */}
                    {promo.map((_, index) => (
                        <Image key={index} src={line} alt={`line-${index}`} className="h-1 w-4 mx-auto opacity-50 bars transition-all" />
                    ))}
                </div>
                <p className="self-center">Shop</p>
            </footer>
        </div>
    );
};

export default DBody;