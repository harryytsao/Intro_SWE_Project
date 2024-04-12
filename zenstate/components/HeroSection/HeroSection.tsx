import React from 'react'
import Image from "next/image"
import { SignUpButton } from "@clerk/nextjs";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-8 place-self-center text-center sm:text-left">
                    <h1 className="mb-4 text-7xl font-bold bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">ZenState</h1>
                    <h2 className="mb-4 text-4xl text-[#92A7F7]">About Us</h2>
                    <p className="text-[#e5e5e7] text-base sm:text-xl mb-6 lg:text-2xl">
                        For those seeking to enhance productivity and accomplish goals, ZenState stands out as a revolutionary productivity application. Unlike our competitors, ZenState fosters competition among users through leaderboards and challenges, adding an exciting dimension to goal achievement. With its customizable interface tailored to individual goals and tasks, our product empowers individuals to optimize productivity and reach their aspirations effectively.
                    </p>
                    <div>
                        <SignUpButton>
                            <button className="px-6 py-3 rounded-full mr-4 bg-[#92A7F7] text-white w-[160px] h-[60px] text-2xl font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-[#92A7F7] pointer-events-auto">Sign Up</button>
                        </SignUpButton>
                    </div>
                </div>
                <div className="col-span-4 place-self-center mt-4 ml-40 lg:mt-0">
                    <div className="rounded-full bg-[#252525] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
                    <Image 
                        src="hero.svg"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={400}
                        height={400}
                    />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection