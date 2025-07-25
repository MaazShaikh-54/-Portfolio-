import React from 'react';
import { LinkedinIcon, GithubIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-[#78b86a] p-2 font-medium rounded-lg flex justify-between items-center text-white'>
        <p className='text-sm'>
          © 2025 Mohammad Maaz Shaikh
        </p>
        <div className='flex gap-3'>
          <a href='https://www.linkedin.com/in/mohammad-maaz-shaikh/' target='_blank' rel='noopener noreferrer'>
            <LinkedinIcon strokeWidth={1.25} className='w-5 h-5 hover:text-gray-200 transition-colors' />
          </a>
          <a href='https://github.com/MaazShaikh-54' target='_blank' rel='noopener noreferrer'>
            <GithubIcon strokeWidth={1.25} className='w-5 h-5 hover:text-gray-200 transition-colors' />
          </a>
        </div>
      </footer>
  )
}

export default Footer;