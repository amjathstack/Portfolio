'use client'
import Image from 'next/image'
import profile from '../../assets/profile_logo.jpg'
import mongodb_logo from '../../assets/mongo.svg'
import express_logo from '../../assets/express.png'
import react_logo from '../../assets/react.png'
import node_logo from '../../assets/node.png'
import next_logo from '../../assets/next.png'
import nextauth_logo from '../../assets/nextauth.png'
import download_icon from '../../../public/download.svg'

export default function Hero() {
    return (
        <div id='Home' data-aos="fade-up"
            data-aos-anchor-placement="center-center" className="flex flex-col items-center justify-center text-center py-30 sm:py-40 sm:px-4">

            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-2 py-1 sm:px-4 sm:py-2 border border-gray-300 rounded-full">
                <Image
                    src={profile}
                    alt="profile"
                    width={35}
                    height={35}
                    className="rounded-full border border-gray-300"
                />
                <span className="text-[12px] sm:text-[17px] font-medium">Mohammed Amjath</span>
            </button>


            <h1 className="text-[27px] sm:text-[45px] md:text-[45px] font-bold mt-6 leading-tight backdrop-blur">Full Stack Developer</h1>

            <p className="backdrop-blur text-center text-[13px] sm:text-[17px] md:text-[18px] mt-3 text-black/90 max-w-full">
                Building Innovative Web Applications With Precision, Performance, and Creativity.
            </p>
            <p className="text-center text-[14px] sm:text-[18px] md:text-[20px] mt-1 text-black/90 max-w-full">Designing the Future of the Web.</p>


            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5 mt-6">
                <a href="#projects" className="text-[15px] px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition w-full sm:w-auto">
                    Preview Projects
                </a>
                <a href='/Mohammed Amjath (Full Stack developer).pdf' download className="flex items-center cursor-pointer justify-center gap-2 text-[15px] px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-100 hover:text-black transition w-full sm:w-auto">
                    Download Resume
                    <Image width={18} src={download_icon} alt='download_icon' />
                </a>
            </div>

            <div className='flex flex-wrap justify-center mt-16 sm:mt-20 gap-6 sm:gap-10 md:gap-14'>
                <Image className="w-13 sm:w-18" width={60} height={60} src={mongodb_logo} alt="mongo" />
                <Image className="w-13 sm:w-18" width={60} height={60} src={express_logo} alt="express_logo" />
                <Image className="w-13 sm:w-18" width={60} height={60} src={react_logo} alt="react" />
                <Image className="w-13 sm:w-18" width={60} height={60} src={node_logo} alt="node" />
                <Image className="w-13 sm:w-18" width={60} height={60} src={next_logo} alt="next" />
                <Image className="w-13 sm:w-18" width={60} height={60} src={nextauth_logo} alt="firebase" />
            </div>


        </div>

    )
}
