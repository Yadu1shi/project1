import Image from "next/image";
import logo from "public/Frame 80.png/";

export default function Footer(){
    return(


        <section
        className="relative h-[400] w-full bg-[#171E2B] font-body  text-white justify-center items-center  py-16 px-56  text-center ">
            <Image className="absolute top-8 left-16" src={logo} alt="Logo" width={100} height={50} />
        
            <div className=" flex justify-around gap-10 whitespace-nowrap px-10">
                <ul className="text-sm pr-20 space-y-4">
                    <li className="mb-8 font-heading text-mb font-semibold">Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
                <ul className="text-sm pr-12 space-y-4">
                    <li className="mb-8 text-mb font-heading font-semibold">Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
                <ul className="text-sm space-y-4">
                    <li className="mb-8 text-mb font-heading font-semibold">Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
                <ul className="text-sm space-y-4">
                    <li className="mb-8 text-mb font-heading font-semibold">Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
            </div>
        </section>
    )
}