import React from 'react'

const About = () => {
    return (
        <div className='mt-18 lg:w-[55%] mx-auto lg:text-center lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-4 md:w-[70%] sm:w-[90%] w-[95%]'>
            <h3 className='font-semibold md:text-xl'><span className='text-[#78b86a] font-light font-[caveat]'>&lt;h3&gt;</span> About <span className='text-[#78b86a] font-light font-[caveat] '>&lt;/h3&gt;</span></h3>
            <p className='font-light text-justify tracking-tight md:text-lg'>I’m a web developer who enjoys turning ideas into reliable, user-friendly websites. I care about writing clean code, making things run smoothly, and keeping the experience simple for everyone. I'm always looking for ways to build better, more thoughtful solutions.</p>
        </div>
    )
}

export default About;