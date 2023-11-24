import styles from "../style"
import {arrowUp} from '../assets'
import {easeInOut, motion, spring, stagger} from 'framer-motion'
const GetStarted =() =>(
    <motion.div
    // initial={{x:0}}
    // animate={{
    //     x:[-20,20,-20]
    // }}
    // transition={{duration:1,
        
    //     type:spring,
    //       repeat:Infinity
          
    //     }}
    className={`${styles.flexCenter} w-[140px] ss:ml-10 h-[140px] p-1 cursor-pointer rounded-full bg-blue-gradient`}>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
            <div className={`${styles.flexStart} flex-row`}>
                <p className="font-poppins font-medium text-[18px] mr-2 leading-[23px]">
                    <span className=" text-gradient">Get</span>
                </p>
                <img src={arrowUp} alt="arrow" className=" w-[23px] h-[23px] object-contain"/>
            </div>
            <p className="font-poppins font-medium text-[18px] leading-[23px]">
                 <span className=" text-gradient">started</span>
            </p>
            

        </div>

    </motion.div>
)

export default GetStarted