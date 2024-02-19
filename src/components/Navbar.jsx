import React, { useState } from 'react'
import { navLinks } from '../constants'
import { motion, spring, stagger } from 'framer-motion'
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";

import {logo} from '../assets'

export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  const toggleIcon =() =>{
    setToggle((prev) => !prev)
  }
  return (
    <nav className='w-full flex flex-wrap py-6 justify-between items-center navbar'>
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
      <div className=' sm:hidden'>
        <button onClick={toggleIcon}>
            {toggle? <HiX className=' w-8 h-8'/>: <HiMenuAlt3 className=' w-8 h-8'/>}
        </button>
      </div>
      {toggle && (
        
            <ul className=' list-none mt-5 flex flex-col justify-center items-center basis-full'>
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

       

      )}

    </nav>
  )
}
