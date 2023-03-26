import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import AutoTyping, { BlinkCursor } from 'react-auto-typing'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={ `${styles.paddingX} absolute inset-0
        sm:top-[90px] top-[115px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className=' w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm &nbsp;
              <span className="text-[#915eff]">
                <AutoTyping
                  textRef='Abdullah' 
                  delayToWrite={1000} 
                  delayToDelete={2000}
                />
                <BlinkCursor
                  blinkSpeed={500} 
                />
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop full stack web applications.
              <br className='sm:block hidden'/> Experienced in building scalable architectures and data driven apps.
            </p>
          </div>
        </div>
        <ComputersCanvas />
        <div className='absolute sm:bottom-14 bottom-16 sm:my-0 my-8 w-full 
         flex justify-center items-center'>
            <a href="#about">
              <div className='indicator'>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
        </div>
    </section>
  )
}

export default Hero