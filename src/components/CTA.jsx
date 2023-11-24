import styles from "../style";
import Button from "./Button";
import {motion, stagger} from 'framer-motion'

const CTA = () =>(
    <motion.section
    initial={{y:200, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{duration:1.2, type:stagger}}
    className=
        {`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-blackk rounded-[20px] box-shadow`}>
        <div className="flex flex-1 flex-col">
            <h2 className={`${styles.heading2}`}>
                Let's try our service now
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Everything you need to accept card payment and grow your business anywhere on the planet
            </p>

        </div>
        <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
            <Button/>

        </div>

    </motion.section>
)

export default CTA