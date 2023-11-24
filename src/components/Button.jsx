import { easeInOut, motion, spring } from "framer-motion"

const Button = () =>{
    return (
        <motion.button
        initial={{scale:1}}
        animate={{scale:[0.9,0.8,0.7,0.8,0.9]}}
        transition={{
            repeat:Infinity,
            duration: 1,
            time:[0.2,0.2,0.2,0.2,0.2],
            // ease:easeInOut
            type:spring
        }}
        type="button" className={`bg-blue-gradient rounded-md mt-2  py-4 px-6`}>
            Get started
        </motion.button>
    
    )
}

export default Button