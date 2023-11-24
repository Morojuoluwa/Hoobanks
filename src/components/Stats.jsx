import {stats} from '../constants'
import styles from '../style'
import { motion } from 'framer-motion'

const Stats = () =>(
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        {stats.map((stat) =>(
            <div key={stat.id} className={`flex flex-1 items-center justify-start m-3`}>
                <motion.h4 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:2}}
                className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[43px] text-white'>{stat.value}
                </motion.h4>
                <motion.p 
                initial={{opacity:0, y:-50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, delay:0.5}}
                
                className=
                'font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[43px] text-gradient uppercase ml-3'>
                    {stat.title}</motion.p>
            </div>
        ))}

    </section>

)

export default Stats