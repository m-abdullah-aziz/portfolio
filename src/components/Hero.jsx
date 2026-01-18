import { motion } from 'framer-motion';
import { styles } from '../styles';
import { useState, useEffect } from 'react';
import AutoTyping, { BlinkCursor } from 'react-auto-typing';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto overflow-hidden bg-black'>
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Main content - centered vertically */}
      <div className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex items-center z-10`}>
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
          {/* Left side - your content */}
          <div className="flex flex-row gap-5 flex-1">
            <div className='flex flex-col justify-center items-center mt-5'>
              <div className='w-5 h-5 rounded-full bg-[#915eff]' />
              <div className='w-1 sm:h-80 h-40 violet-gradient' />
            </div>
            
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm{' '}
                <span className="text-[#915eff]">
                  {isMobile ? (
                    'Abdullah'
                  ) : (
                    <>
                      <AutoTyping
                        textRef='Abdullah' 
                        delayToWrite={1000} 
                        delayToDelete={2000}
                      />
                      <BlinkCursor blinkSpeed={500} />
                    </>
                  )}
                </span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                Full-stack engineer specializing in backend architecture, scalable systems, and data-driven applications.
              </p>

              {/* Detailed description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed"
              >
                I design and build production systems for e-commerce, fintech, telecom, healthcare and ride-hailing platforms. Specializing in backend architecture, APIs, databases, and system design.
              </motion.p>

              {/* Tech stack badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-2 mt-8"
              >
                {['Java', 'Python', 'JavaScript', 'GoLang', 'Sockets', 'Kafka', 'SQL', 'GCP', 'AWS', 'Docker', 'K8s', 'Mobile Apps', 'Web Apps'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm border border-[#915eff]/30 rounded-full text-white/80 hover:border-[#915eff]/60 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right side - Code snippet visualization */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block flex-1 max-w-xl"
          >
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-[#915eff]/20 font-mono text-sm hover:border-[#915eff]/40 transition-colors">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="text-gray-300 overflow-hidden">
                <code>{`const buildScalableSystems = () => {
  const skills = {
    backend: ['Java Spring boot', 'Node.js', 'Django', "Fast API"],
    databases: ['MySQL', 'PostgreSQL', 'MongoDb', 'Redis'],
    cloud: ['GCP', 'AWS', 'Docker', 'K8s'],
    frontend: ['React', 'React Native']
  };
  
  return optimize(
    skills,
    { performance: 'high' }
  );
};`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className='hidden sm:flex absolute bottom-14 w-full justify-center items-center z-10'>
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

export default Hero;