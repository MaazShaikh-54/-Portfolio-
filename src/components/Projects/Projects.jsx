import React from 'react'
import ProjectBG from '/camporia-bg.jpg';
import ProjectLogo from '/camporia-logo.png';
import { Send, Atom, } from 'lucide-react';
// import { Javascript } from '@mui/icons-material';

const Projects = () => {
    return (
        <div id='projects' className='mt-18 lg:w-[55%] mx-auto lg:text-center lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-4 md:w-[70%] sm:w-[90%] w-[95%]'>
            <h3 className='font-semibold mt-10 mb-4 md:text-xl'>
                <span className='text-[#78b86a] font-light font-[caveat]'>&lt;h3&gt;</span> Projects <span className='text-[#78b86a] font-light font-[caveat] '>&lt;/h3&gt;</span>
            </h3>

            <div className='flex flex-row gap-4'>
                <div className='relative max-w-md mx-auto bg-[#171717] p-6 rounded-lg overflow-hidden before:content-[""] before:absolute before:w-40 before:h-40 before:bg-[radial-gradient(#ffffff33_1px,_transparent_1px)] before:bg-[length:6px_6px] before:rounded-full before:-bottom-20 before:-left-20 after:content-[""] after:absolute after:w-16 after:h-16 after:bg-[radial-gradient(#78b86a66_1px,_transparent_1px)] after:bg-[length:5px_5px] after:rounded-full after:-top-6 after:right-4 before:shadow-lg before:shadow-white/30'>

                    <div className='flex flex-col p-4 bg-gray-100 border-1 md:h-auto md:w-auto' style={{ backgroundImage: `url(${ProjectBG})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.85, borderRadius: '10px', }}>
                        <img src={ProjectLogo} alt="project-logo" className='h-16 w-16 md:ml-5 md:h-22 md:w-22 ' />
                        <div>
                            <div className='flex gap-2 justify-between mb-2 md:px-3'>
                                <h4 className='md:text-2xl text-lg font-semibold mt-2'>Camporia</h4>
                                <div className='flex items-center gap-2 mt-2 hover:scale-103 transition-transform duration-500 hover:bg-white/15 px-1 rounded border-1'>
                                    <a href="https://camporia.netlify.app/" target="_blank" rel="noopener noreferrer" className='text-white font-normal'>View Project</a><Send color='white' size={18} className=' ' />
                                </div>
                            </div>
                            <hr className='my-4' />
                            <p className='text-white md:text-left '>A camping website that allows users to book campsites, view available amenities, and manage bookings. (Frontend)</p>
                            <p className='text-white mt-1.5 flex'><span className='font-semibold mr-2'>Technology: </span> <Atom color='#76DFDF' opacity={0.8} /> React JS </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Projects;

{/* <div className="p-4 relative before:absolute before:inset-0 before:bg-[repeating-linear-gradient(45deg,_rgba(144,238,144,0.15)_0px,_rgba(144,238,144,0.15)_2px,_transparent_2px,_transparent_4px)] before:content-[''] pointer-events-none">
    </div> */}
