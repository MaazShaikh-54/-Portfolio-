import React from 'react'
import hero from '/hero-image.png';
import Resume from '/resume/Mohammad_Maaz_A_Shaikh.pdf';
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

const Hero = () => {
    return (
        <div className='bg-[#171717] p-4 rounded-lg shadow-lg shadow-[#78b86a]/35 lg:w-[55%] mx-auto lg:h-[250px] md:w-[70%] sm:w-[90%] w-auto flex justify-center items-center'>
            <div className="flex-col items-center justify-center">
                <div className="flex justify-start lg:items-center">
                    <div className="max-h-full border-1 rounded-md p-1 border-gray-400 shadow-xl lg:border-gray-400 lg:border-2 lg:shadow-2xl lg:p-1 md:h-full md:border-gray-400 md:border-2 md:shadow-xl">
                        <img
                            src={hero}
                            alt="Hero-IMG"
                            className="w-24 h-24 rounded-sm hover:scale-105 transition-transform duration-300 grayscale-35 lg:w-52 lg:h-52 lg:hover:scale-102"
                        />
                    </div>
                    <div className='relative flex-col lg:items-center'>
                        <div className='max-w-auto ml-4 text-left lg:ml-10'>
                            <h1 className="text-xl font-medium text-[#78b86a] tracking-tighter lg:text-4xl lg:tracking-wider lg:mt-1 md:text-3xl">Mohd. Maaz Shaikh</h1>
                            <p className="text-sm text-white font-light lg:text-2xl lg:mt-1">Front End Developer</p>
                        </div>
                        <div className='text-white hover:text-[#78b86a] flex justify-between mt-5 items-center lg:ml-6 lg:mt-16'>
                            <div className='flex space-x-4 mx-4 mt-0.5'>
                                <a href="https://www.linkedin.com/in/mohd-maaz-shaikh/" target='_blank'><LinkedInLogoIcon color='white' className='w-6 h-6 lg:w-9 
                                lg:h-9' /></a>
                                <a href="https://github.com/MaazShaikh-54" target='_blank'><GitHubLogoIcon color='white' className='w-6 h-6 lg:w-9 lg:h-9' /></a>
                            </div>
                            <a href={Resume} download>
                                <Button variant="outline" className="border-[1.4px] py-0.5 px-[8px] text-[12px]lg:py-2.25 lg:px-[14px] lg:text-[16.5px]" >Resume</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
