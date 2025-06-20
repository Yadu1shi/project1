'use client'

import Image from "next/image"

export default function Section9() {
    return (
        <div className="relative">
            <section className="flex md:justify-end h-[724px] bg-[#F1F1F1] my-36 px-20 items-start">
                <div className="w-full md:w-1/2 gap-8 overflow-hidden py-16 flex flex-col">
                    <div className="space-y-4 pr-8">
                        <a className='font-semibold text-secondary'>Lorem ipsum </a>
                        <h1 className="text-3xl font-bold text-primary font-heading leading-snug">
                            Lorem ipsum dolor sit amet consectetur. Dignissim tellus.
                        </h1>
                        <p className="text-base font-body leading-relaxed text-gray-600">
                            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisl felis. Massa in facilisis semper libero eget eu quisque bibendum platea. Tortor fames.
                        </p>
                    </div>
                    
                    <div>
                        <button className="bg-primary text-white px-6 py-2 rounded-[4px] flex items-center gap-2 text-sm hover:bg-secondary">
                            Lorem Ipsum
                            <Image src={'/arrow.svg'} alt="arrow" height={20} width={20}/>
                        </button>
                    </div>
                    <div className=" w-[500px] h-[330px] px-8 py2 mr-20 z-10 shadow-lg  bg-white">
                        <Image src={'/pin.svg'} alt="icon" className=" md:bloack relative left-80 bottom-0" height={50} width={50} />
                        <div className="flex flex-col m-2 p-2 gap-4 text-sm font-body">
                        <h1 className="font-heading text-text text-xl font-medium">Lorem ipsum dolor sit</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Habitant<br/> vestibulum vitae amet habitasse semper.</p>
                        <p>Lorem ipsum dolor sit amet consectetur. Egestas congue <br/>mattis ut placerat vitae amet suspendisse fermentum<br></br> velit. Nibh dolor nunc id tristique sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur. Egestas congue <br/>mattis ut placerat vitae amet suspendisse fermentum<br></br> velit. Nibh dolor nunc id tristique sit.</p>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block md:w-1/2 relative bottom-12 left-12">
                    <Image
                        src={'/hero7.png'}
                        alt="item"
                        height={450}
                        width={450}
                        className="object-contain"
                        // Remove style prop for absolute positioning
                    />
                </div>
            </section>
            <div className='absolute bottom-0 h-[20px] w-full bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041]'></div>
        </div>
    )
}
