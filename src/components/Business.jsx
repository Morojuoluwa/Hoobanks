import styles, {layout} from "../style"
import {features} from '../constants/index'
import Button from "./Button"
import {motion, spring} from 'framer-motion'
// import { motion, useAnimationControls } from "framer-motion"




const Business = () =>{
    // const control = useAnimationControls()
    // const handleClick = () =>{
    //     control.start('goat')
    // }
    return(
        <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <motion.h2 
            initial={{x:-200, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:1}}
             
            className={styles.heading2}>
                You do the business, <br className=" sm:block hidden"/> we'll handle the money
            </motion.h2>
            <motion.p
              initial={{x:200, opacity:0}}
              whileInView={{x:0, opacity:1}}
              transition={{duration:1}}
            className={`${styles.paragraph} max-w-[470px]`}>
                With the right credit card, you can improve your financial
                 life by building credit, earning rewards and saving money. But with hundreds 
                 of credit cards on the market
            </motion.p>
            <Button/>
            
           


        </div>
        <div className={`${layout.sectionImg} flex-col`}>
            {features.map((feature, index) =>(
                <motion.div 
                initial={{opacity:0, y:-100}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, type:spring, delay:0.6}}
                    
                className={`flex bg-black-gradient items-center
                 justify-between p-2 rounded-md ${index !== features.length -1? 'mb-2': 'mb-0'}`} key={feature.id}>
                    <div className=" mr-3 h-8 w-8 rounded-full bg-dimBlue flex items-center justify-center">
                        <img className="w-[50%]" src={feature.icon}/>
                    </div>
                    <div>
                        <h1 className=" font-bold text-white text-xl">{feature.title}</h1>
                        <p className="  max-w-[300px]">{feature.content}</p>
                    </div>
                </motion.div>


               
            ))}

        </div>
    </section>
    )
    
}



export default Business