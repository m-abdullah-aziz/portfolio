import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("rigt", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"  
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
          flex justify-evenly items-center flex-col' 
          options={{
            max: 45, scale: 1, speed: 450
          }}
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={ fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a skilled software engineer, with experince in with Java, Python, 
        JavaScript and AWS, specializing in backend development. I have 
        worked with teams from all around the world and I am completely 
        aware of the Agile Eco System. I can help you build a robust, scalable 
        and highly usable web application. I have worked with several domains 
        including E-Commerce, Mass Transit, Telecom and Fintech.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        { services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about")