import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import {motion, spring} from 'framer-motion'
const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} flex-col mb-8 w-full md:flex-row`}>
            <div className=" flex-1 flex flex-col justify-start mr-10">
                <motion.img
                initial={{opacity:0, x:-300}}
                whileInView={{opacity:1, x:0}}
                transition={{type: spring, duration:1}}
                src={logo} alt="footer-logo" className="w-[266px] h-[72px] object-contain"/>
                <motion.p
                initial={{opacity:0, x:-300}}
                whileInView={{opacity:1, x:0}}
                transition={{type: spring, duration:1, delay:0.3}}
                className={`${styles.paragraph} mt-4 max-w-[310px]`}>
                    A new way to make the payment easy, reliable and secure.

                </motion.p>

            </div>
            <div className="flex w-full flex-[1.5] flex-row justify-between flex-wrap md:mt-0 mt-10">
                {footerLinks.map((foot) =>(
                    <div key={foot.key}  className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                       
                        <motion.div
                        initial={{opacity:0, y:-200}}
                        whileInView={{opacity:1, y:0}}
                        transition={{delay:0.5, duration:1, type:spring}}
                        className=" flex flex-col ss:my-0 my-4 min-w-[150px]">
                            <h4 className=" font-poppins mt-2 font-medium text-[18px] leading-[27px] text-white">
                                {foot.title}
                            </h4>
                            <ul className="list-none mt-2">
                                {foot.links.map((link, index) =>(
                                    <li key={link.name}
                                    className={`font-poppins font-normal text-[16px]
                                     leading-[24px] text-dimWhite mb-2 hover:text-secondary cursor-pointer`}
                                    >
                                        {link.name}

                                    </li>
                                ))}

                            </ul>

                        </motion.div>
                      
                    </div>
                ))}
            </div>

        </div>
        <div className="w-full flex justify-between
         items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
            <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                2023 Hoobanks. All rights reserved

            </p>
            <div className="flex flex-row md:mt-0 mt-6">
                {socialMedia.map((social, index) =>(
                    <img
                        key={social.id}
                        alt="social media logo"
                        src={social.icon}
                        className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-2': 'mr-0'}`}
                    />
                ))}
            </div>

        </div>

    </section>
)

export default Footer