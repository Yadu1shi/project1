import Image from "next/image"

export default function Section6() {
    return (
        <div className="relative">
            <section className="flex md:justify-end bg-[#F8F8F8] md:mt-56 items-start">
                <div className="hidden md:block md:w-1/2 relative bottom-12 left-0">
                    <Image
                        src={'/hero5.png'}
                        alt="item"
                        height={450}
                        width={450}
                        className="object-contain"
                        // Remove style prop for absolute positioning
                    />
                </div>
                <div className="w-full md:w-1/2 gap-8 overflow-hidden py-16 flex flex-col">
                    <div className="space-y-4 pr-8">
                        <a className='font-semibold text-secondary'>Lorem ipsum </a>
                        <h1 className="text-3xl font-bold font-heading leading-snug">
                            <span className="text-primary">LOREM</span> IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC.
                        </h1>
                        <p className="text-base font-body leading-relaxed text-gray-600">
                            Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
                        </p>
                    </div>
                    <div className="flex justify-between font-body pr-20">
                        <ul className="space-y-4">
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                        <ul className="space-y-4">
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </div>
                    <div>
                        <button className="bg-primary text-white px-6 rounded-[4px] flex items-center gap-2 text-sm">
                            Lorem Ipsum →
                        </button>
                    </div>
                </div>
            </section>
            <div className='absolute bottom-0 h-[20px] w-full bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041]'></div>
        </div>
    )
}
