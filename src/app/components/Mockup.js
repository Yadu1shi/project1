'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeInUp,fadeInScale } from "../utils/motionVariants"
export default function Mockup(){
    return(
        <div className="relative overflow-hidden">

        <section className="flex gap-16 h-[530px] w-full bg-[#F3F3F3] px-16 py-28 my-24">
        <div className="flex flex-col gap-12">
            <div className="space-y-4 pr- w-[500px]  h-[246px] ">
                    <a className='font-semibold text-secondary'>Lorem ipsum</a>
                    <h1 className="text-[40px] font-bold ">
                      LOREM IPSUM DOLOR SIT AMET
                    </h1>
                    <p className="text-sm leading-relaxed  text-gray-900">
                        Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.</p>
                </div>

            <div className=" flex gap-1">
                <button style={{
                    background:"url(/playstore.png)",
                    backgroundPosition:"center",
                    backgroundSize:"cover",
                    height:"40px",
                    width:"140px"
                }}/>
                <button style={{
                    background:"url(/applestore.png)",
                    backgroundPosition:"center",
                    backgroundSize:"cover",
                    height:"40px",
                    width:"140px"
                }}/>
            </div>

        </div>
        </section>
        
            <Image
              src={"/hero4.png"}
              alt="item"

              fill
              style={{ objectFit: "contain", position:"absolute", padding:"28px", top:0, left:200}} // or "cover" if you want it to fill the box
            />
        </div>
    )
}