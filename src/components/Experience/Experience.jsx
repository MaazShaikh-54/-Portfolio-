import * as React from 'react';

export default function Experience() {
    return (
        <div id='work' className='mt-18 lg:w-[55%] mx-auto lg:text-center lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-4 md:w-[70%] sm:w-[90%] w-[95%]'>
            <h3 className='font-semibold md:text-xl'><span className='text-[#78b86a] font-light font-[caveat]'>&lt;h3&gt;</span> Experience <span className='text-[#78b86a] font-light font-[caveat]'>&lt;/h3&gt;</span></h3>

            <div className='mt-[-75px] text-justify tracking-tight md:text-lg'>
                <div className='flex justify-between'>
                    <h4 className="relative inline-block before:content-['.'] before:text-9xl">
                        Software Developer
                    </h4>
                    <p className='text-gray-300 font-thin text-sm mt-[93px] tracking-tighter'>Oct, '25 - Present</p>
                </div>
                <p className='font-light relative pl-10 before:content-[""] before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-gray-400'>
                    Working as a full-stack developer at <a href='https://rabsnetsolutions.com/' target='_blank' rel='noopener noreferrer' className='text-[#78b86a] hover:underline'>RABS Net Solutions Pvt. Ltd.</a>, building and maintaining scalable web and mobile applications with focus on backend workflows, data handling, and system reliability. <br/>
                    <span className='text-gray-400'>Stack: React, Next.js, React Native, Node.js, Express.js, MySQL, aaPanel</span>
                </p>
            </div>

            <div className='mt-[-75px] text-justify tracking-tight md:text-lg'>
                <div className='flex justify-between'>
                    <h4 className="relative inline-block before:content-['.'] before:text-9xl">
                        Web Developer Intern
                    </h4>
                    <p className='text-gray-300 font-thin text-sm mt-[93px] tracking-tighter'>Apr, '25 - Sept, '25</p>
                </div>
                <p className='font-light relative pl-10 before:content-[""] before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-gray-400'>
                    Worked as a web developer intern at <a href='https://rabsnetsolutions.com/' target='_blank' rel='noopener noreferrer' className='text-[#78b86a] hover:underline'>RABS Net Solutions Pvt. Ltd.</a>, contributing to real-world projects and gaining hands-on experience in building responsive interfaces and integrating them with backend systems. <br/>
                    <span className='text-gray-400'>Stack: React, Node.js, Express.js, MySQL</span>
                </p>
            </div>
        </div>
    );
}
