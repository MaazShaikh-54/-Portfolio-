import * as React from 'react';

export default function Experience() {
    return (
        <div  id='work' className='mt-18 lg:w-[55%] mx-auto lg:text-center lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-4 md:w-[70%] sm:w-[90%] w-[95%]'>
            <h3 className='font-semibold md:text-xl'><span className='text-[#78b86a] font-light font-[caveat]'>&lt;h3&gt;</span> Experience <span className='text-[#78b86a] font-light font-[caveat]'>&lt;/h3&gt;</span></h3>
            <div className='mt-[-75px] text-justify tracking-tight md:text-lg'>
                <div className='flex justify-between'>
                    <h4 className="relative inline-block before:content-['.'] before:text-9xl">
                        Web Developer Intern
                    </h4>
                    <p className='text-gray-300 font-thin text-sm mt-[93px] tracking-tighter'>Apr, '25 [4 mo.s Present]</p>
                </div>
                {/* <div class="p-8 relative before:absolute before:inset-0 before:bg-[repeating-linear-gradient(45deg,_rgba(34,197,94,0.2)_0px,_rgba(34,197,94,0.2)_2px,_transparent_2px,_transparent_4px)] before:content-[''] pointer-events-none">
                    <p class="relative z-10">This is your content</p>
                </div> */}
                <p className='font-light relative pl-10 before:content-[""] before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-gray-400'>I worked as a web developer intern at <a href='https://rabsnetsolutions.com/' target='_blank' rel='noopener noreferrer' className='text-[#78b86a] hover:underline'>Rabs Net Solutions Pvt. Ltd.</a> where I contributed to various projects, enhancing my skills in web development and gaining practical experience in the field.</p>
            </div>
        </div>
    );
}
