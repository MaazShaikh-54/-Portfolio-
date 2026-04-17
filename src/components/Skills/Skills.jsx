import React from 'react'
import { Circle, Ellipsis, File, Files, Folder, ArrowDownToLine, Parentheses, Braces, Square } from 'lucide-react';

const Skills = () => {

    const skills = [
        { key: "Language", value: "JavaScript" },
        { key: "Framework", value: "React, Node, Express, Tailwind, MUI" },
        { key: "Database", value: "MySQL, MongoDB" },
        { key: "Tool", value: "Git" }
    ];

    const totalLines = skills.length + 2;

    return (
        <div id='skills' className='bg-[#0e1414] rounded-lg mt-18 mb-1 border-[#3d4917] border-[1.25px] p-[6px] lg:w-[55%] md:w-[70%] sm:w-[90%] w-[95%] mx-auto'>
        
            <div className='flex justify-between items-center bg-[#1b201e] rounded-t-lg mb-0.5'>
                <div className='flex mx-2 md:p-3'>
                    <Circle fill='#e64e35' className='w-3 h-3 mx-0.75' />
                    <Circle fill='#e6a130' className='w-3 h-3 mx-0.75' />
                    <Circle fill='#7eae25' className='w-3 h-3 mx-0.75' />
                </div>
                <p className='text-white md:text-xl'>Skills.json</p>
                <Ellipsis className='w-8 h-8 mx-2 text-white' />
            </div>

            <div className='flex justify-between items-center bg-[#3d4917]/50 p-1 mb-0.5'>
                <div className='flex mx-2'>
                    <File className='w-4 h-4 mx-1 text-white' />
                    <Files className='w-4 h-4 mx-1 text-white' />
                    <Folder className='w-4 h-4 mx-1 text-white' />
                    <ArrowDownToLine className='w-4 h-4 mx-1 text-white' />
                    <Parentheses className='w-4 h-4 mx-1 text-white' />
                    <Braces className='w-4 h-4 mx-1 text-white' />
                </div>
                <div className='flex mx-2'>
                    <Square className='w-4 h-4 mx-1 text-white' />
                    <Ellipsis className='w-4 h-4 mx-1 text-white' />
                </div>
            </div>

            <div className='flex text-[14px] font-sans'>
                
                <div className='text-white font-[JetBrains Mono] text-xs flex flex-col mx-3 my-2 md:text-lg'>
                    {Array.from({ length: totalLines }, (_, i) => (
                        <p key={i} className='m-2.5'>{i + 1}</p>
                    ))}
                </div>

                <div className='md:text-xl'>
                    <p className='text-white/50 my-1'>{"{"}</p>

                    {skills.map((item, index) => (
                        <p key={index} className='my-1 ml-4 leading-6 md:leading-8'>
                            <span className='text-[#78b86a]'>"${item.key}"</span>
                            <span className='text-white font-semibold'>:</span>
                            <span className='font-mono'> "{item.value}"</span>
                        </p>
                    ))}

                    <p className='text-white/50 my-1'>{"}"}</p>
                </div>

            </div>
        </div>
    )
}

export default Skills
