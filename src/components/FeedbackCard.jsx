import { quotes } from "../assets";
import {motion, spring} from 'framer-motion'

const FeedbackCard = ({content, name, id, title, img}) =>(
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{type:spring, delay:0.6, duration:1.2}}
    className=" flex flex-col bg-black-gradient justify-between
     max-w-[300px] px-10 py-12 md:mr-10 rounded-md sm:mr-5 mr-0">
            <img src={quotes} alt="double-quotes" className=" w-[42px] h-[27px] object-contain"/>
            <p className=" font-poppins font-normal text-[18px] text-white my-10">{content}</p>
            <div className=" flex items-center justify-start">
                <img className="mr-2 w-[48px] h-[48px] rounded-full" src={img}/>
                <div>
                    <h4 className="font-poppins font-semibold text-[20px] text-white mb-[2px]">{name}</h4>
                    <p className="font-poppins font-normal text-[16px] text-dimwhite ">{title}</p>
                </div>
            </div>

    </motion.div>
)

export default FeedbackCard;