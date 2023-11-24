import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
import {easeIn, easeInOut, motion, spring} from 'framer-motion'

const Hero = () =>(
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity:1}}
            transition={{duration:3}}
            className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
                <img src={discount} alt='discount' className='w-[32px] h-[32px]'/>
                <p className={`${styles.paragraph} ml-2`}>
                    <span className=' text-white'>20%</span> Discount for                 
                    <span className=' text-white'> 1 month</span> Account
                </p>
            </motion.div>
            <div className='flex flex-row justify-between items-center w-full'>
                <motion.h1

                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:0.5, duration:3}}
                className='flex-1 font-poppins font-semibold ss:text-[72px]  text-[52px] text-white ss:leading-[100px] leading-[75px] '>
                    The Next <br className=' sm:block hidden'/>{""}
                    <span
                    className=' text-gradient'
                    >Generation</span> <br/> {" "}
                   
                </motion.h1>
                <div className='hidden ss:flex '>
                    <GetStarted/>
                </div>
            </div>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.5, duration:3}}
                
            >
                <h1 className='font-poppins font-semibold ss:text-[72px]  text-[52px] text-white ss:leading-[100px] leading-[75px] '>
                    Payment method
                </h1>

                <motion.p
                initial={{x:-400}}
                whileInView={{x:0}}
                transition={{duration:1,type:spring}}
                className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Our team of experts uses a methodology to identify the credit cards most likely to lift your needs. we examine annual percentage rates, annual fees.
                </motion.p>
            </motion.div>
            

        </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <motion.img
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:4, delay:0.5}}
            alt='billing' className=' w-[100%] relative z-[5] h-[100%]' src={robot}/>
            <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
            <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
            <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>

        </div>
        <div className={`ss:hidden ${styles.flexCenter}`}>
            <GetStarted/>

        </div>

    </section>
)

export default Hero