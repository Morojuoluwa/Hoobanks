import styles, { layout } from "../style";
import Button from "./Button";
import { card } from "../assets";
import {motion, spring} from 'framer-motion'

const CardDeal = () =>(
    <section className={layout.section}>
        <div
            

             className={layout.sectionInfo}>
            <motion.h2
             initial={{opacity:0, y:-200}}
             whileInView={{opacity:1, y:0}}
             transition={{duration:1, type:spring,}}

            className={styles.heading2}>
                Find a better card deal <br className=" hidden sm:block"/> in few easy steps
            </motion.h2>
            <motion.p
             initial={{opacity:0, y:-200}}
             whileInView={{opacity:1, y:0}}
             transition={{duration:1, type:spring, delay:0.3}}

            className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur, adipisicing
             elit. Exercitationem, ipsa pariatur debitis illum itaque labore ab minima eum maiores beatae!
            </motion.p>
            <Button styles="mt-30"/>



        </div>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:2, type:spring, delay:0.4}}
        className={layout.sectionImg}>
            <img src={card} alt="card" className="w-full"/>
        </motion.div>
    </section>

)

export default CardDeal;