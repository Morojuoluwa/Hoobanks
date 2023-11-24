import styles, {layout} from "../style"
import { airbnb } from "../assets"
import { feedback } from "../constants"
import FeedbackCard from '../components/FeedbackCard'
import {easeIn, motion} from 'framer-motion'



const Testimonials = () =>(
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div/>
        <div className=" w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative">
            <motion.h1
            initial={{x:-400, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{ease:easeIn, duration:1.5}}
            className={styles.heading2}>What people are <br className=" hidden sm:block"/>saying about us</motion.h1>
            <motion.div
            initial={{y:-200, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:1.5, ease:easeIn}}
            className=" w-full md:mt-0 mt-6">
                <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you 
                need to access card payments and grow your business around the world</p>
            </motion.div>
        </div>
        <div className="flex flex-wrap sm:justify-between justify-center w-full relative z-[1]">
            {feedback.map((card) =>(
                <FeedbackCard key={card.id} {...card}/>
            ))}
        </div>
    </section>
)

export default Testimonials