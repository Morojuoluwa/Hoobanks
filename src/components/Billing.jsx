import styles, {layout} from "../style"
import { google,apple,bill } from "../assets"
import { motion, spring} from 'framer-motion'
const Billing = () =>(
    <section className={` ${layout.sectionReverse}`}>
        <motion.div
        initial={{x:-200, opacity:0}}
        whileInView={{x:1, opacity:1}}
        transition={{duration:1,type:spring, delay:0.2}}
        className={layout.sectionImgReverse }> 
            <img src={bill} alt="billing" className=" w-[100%] h-[100%]  relative z-[5]"/>

        </motion.div>
        <div className={`${layout.sectionInfo}`}>
            <motion.h2
            initial={{x:200, opacity:0}}
            whileInView={{x:1, opacity:1}}
            transition={{duration:1,type:spring}}
                
            className={styles.heading2}>
                Easily control your <br className=" hidden sm:block"/> billing & invoicing
            </motion.h2>
            
            <motion.p
            initial={{x:200, opacity:0}}
            whileInView={{x:1, opacity:1}}
            transition={{duration:1,type:spring, delay:0.3}}
            className={`${styles.paragraph} max-w-[470px] mt-4`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio inventore asperiores 
                itaque repudiandae. ipsa deleniti. labore quas quod perferendis nesciunt?
            </motion.p>
            <motion.div
            initial={{x:200, opacity:0}}
            whileInView={{x:1, opacity:1}}
            transition={{duration:1,type:spring, delay:0.5}}
            className="flex flex-wrap mt-2">
                <img className=" object-contain mr-2 cursor-pointer" src={apple} alt="apple-logo"/>
                <img className=" object-contain cursor-pointer" src={google} alt="apple-logo"/>
            </motion.div>


        </div>

    </section>

)

export default Billing