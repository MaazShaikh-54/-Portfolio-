import React from 'react'
import { Circle, Ellipsis, File, Files, Folder, ArrowDownToLine, Parentheses, Braces, Square } from 'lucide-react';

const Skills = () => {
    return (
        <div id='skills' className='bg-[#0e1414] rounded-lg mt-18 mb-1 border-[#3d4917] border-[1.25px] p-[6px] lg:w-[55%] md:w-[70%] sm:w-[90%] w-[95%] mx-auto'>
            <div className='flex justify-between items-center bg-[#1b201e] rounded-t-lg mb-0.5'>
                <div className='flex justify-start mx-2 md:p-3 rounded-t-lg'>
                    <Circle fill='#e64e35' className='w-3 h-3 mx-0.75' color='#e64e35' />
                    <Circle fill='#e6a130' className='w-3 h-3 mx-0.75' color='#e6a130' />
                    <Circle fill='#7eae25' className='w-3 h-3 mx-0.75' color='#7eae25' />
                </div>
                <p className='text-white md:text-xl md:font-normal'>Skills.json</p>
                <Ellipsis fill='white' className='w-8 h-8 mx-2' color='white' />
            </div>
            <div className='flex justify-between items-center bg-[#3d4917]/50 p-1 mb-0.5'>
                <div className='flex justify-start mx-2 rounded-t-lg'>
                    <File className='w-4 h-4 mx-1' color='white' />
                    <Files className='w-4 h-4 mx-1' color='white' />
                    <Folder className='w-4 h-4 mx-1' color='white' />
                    <ArrowDownToLine className='w-4 h-4 mx-1' color='white' />
                    <Parentheses className='w-4 h-4 mx-1' color='white' />
                    <Braces className='w-4 h-4 mx-1' color='white' />
                </div>
                <div className='flex justify-start mx-2'>
                    <Square className='w-4 h-4 mx-1' color='white' />
                    <Ellipsis className='w-4 h-4 mx-1' color='white' />
                </div>
            </div>
            <div className='flex justify-start items-center text-[14px] font-sans'>
                <div className='text-white font-thin font-[JetBrains Mono] text-xs flex-col mx-3 my-2 md:text-lg'>
                    <p className='m-2.5'>1</p>
                    <p className='m-2.5'>2</p>
                    <p className='m-2.5'>3</p>
                    <p className='m-2.5'>4</p>
                    <p className='m-2.5'>5</p>
                    <p className='m-2.5'>6</p>
                    <p className='m-2.5'>7</p>
                </div>
                <div className='md:text-xl md:font-thin'>
                    <p className='text-white/50 my-1'>  {`{`}</p>
                    <p className='my-1 ml-4 leading-6 md:leading-8'>
                        <span className='text-[#78b86a]'>"Language"</span>
                        <span className='text-white font-semibold'>:</span>
                        <span className='font-mono'> "JavaScript"</span>
                    </p>
                    <p className='my-1 ml-4 leading-6 md:leading-8'>
                        <span className='text-[#78b86a]'>"Framework"</span>
                        <span className='text-white font-semibold'>:</span>
                        <span className='font-mono'> "React, Node, Express, Tailwind, MUI"</span>
                    </p>
                    <p className='my-1 ml-4 leading-6 md:leading-8'>
                        <span className='text-[#78b86a]'>"Database"</span>
                        <span className='text-white font-semibold'>:</span>
                        <span className='font-mono'> "MySQL, MongoDB"</span>
                    </p>
                    <p className='my-1 ml-4 leading-6 md:leading-8'>
                        <span className='text-[#78b86a]'>"Tool"</span>
                        <span className='text-white font-semibold'>:</span>
                        <span className='font-mono'> "Git"</span>
                    </p>
                    <p className='text-white/50 my-1'>  {`}`}</p>
                </div>
            </div>
        </div>
    )
}

export default Skills