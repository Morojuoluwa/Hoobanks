import React, { useState } from 'react'
import { navLinks } from '../constants'
import { motion, spring, stagger } from 'framer-motion'

import {logo, menu, close} from '../assets'

export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <motion.img
      initial={{x:-100}}
      animate={{x:0}}
      transition={{duration:1, type:stagger}}
      className=' w-32' src={logo}/>
      <motion.ul
      initial={{y:-10}}
      animate={{
        y:[50, 0]
        
      }}
  
      transition={{
        duration:1,
        type:spring
      }}
      
      className=' list-none sm:flex hidden justify-end items-center'>
        {navLinks.map((nav, index) =>(
          <motion.li
          initial={{scale:1, rotate:0}}
          whileHover={{scale:1.2, rotate:'-2deg'}}
          
            key={nav.id}
            className={`font-poppins cursor-pointer text-[16px] ${index ===navLinks.length -1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            <motion.a 
                
            href={`#${nav.id}`}>
              {nav.title}
            </motion.a>

          </motion.li>
        ))}

      </motion.ul>
      <div className=' sm:hidden flex flex-1 justify-end items-center'>
        <img
        src={ toggle? close : menu}
          alt='nernu'
          className=' object-contain w-7'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
        className={`${toggle? 'flex' : 'hidden'}
         p-4 bg-black-gradient absolute top-20 right-0 my-2 justify-center min-w-[140px] rounded-xl sidebar`}
        >
              <ul className=' list-none flex flex-col justify-end items-start '>
            {navLinks.map((nav, index) =>(
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px]
                 ${index ===navLinks.length -1 ? 'mb-0' : 'mb-4'} text-white`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>

              </li>
            ))}

          </ul>

        </div>

      </div>
    </nav>
  )
}
