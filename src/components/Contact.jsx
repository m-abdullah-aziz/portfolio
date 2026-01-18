import { useState, useRef, useEffect} from 'react'
import { motion } from 'framer-motion';
import emailjs from  "@emailjs/browser";

import { styles } from '../styles';
import { slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const formRef = useRef();
  const [ form, setForm ] = useState({
      name: "",
      email: "",
      message: "",
  });
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if(!form.name){
      alert("Please enter your name");
      setLoading(false);
    } else if(!form.email){
      alert("Please enter your email");
      setLoading(false);
    } else if(!form.message){
      alert("Please enter a message");
      setLoading(false);
    } else {
      const key = "a_Q-dRDD5HpbNky_Q"
      const serviceId = "service_hqz544a"
      const templateId = "template_qevo2ps"
      emailjs.send( serviceId, templateId, {
        from_name: form.name,
        to_name: 'Muhammad Abdullah Aziz',
        from_email: form.email,
        to_email: 'abdullahaziz1998@gmail.com',
        message: form.message,
      }, key).then(() => {
        setLoading(false);
        alert('Thanks! Lemme get back to you ASAP!');

        setForm({
          name: "", email: "", message: ""
        })
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert("Sorry! Something went wrong. Please email me at: muhammadabdullahaziz@outlook.com");
      })
    }
  }

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col gap-10 
      overflow-hidden'>
       <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
       >
          <p className={styles.sectionSubText}> Get In touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form 
            ref={formRef} onSubmit={handleSubmit} 
            className="mt-12 flex flex-col gap-8">
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Name</span>
                <input type="text" name="name" value={form.name}
                onChange={handleChange} placeholder="Enter your name"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary
                 text-white rounded-lg outline-none border-none font-medium'
                />
              </label>

              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Email</span>
                <input type="email" name="email" value={form.email}
                onChange={handleChange} placeholder="Enter your email"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary 
                text-white rounded-lg outline-none border-none font-medium'
                />
              </label>

              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Message</span>
                <textarea rows="7" name="message" value={form.message}
                onChange={handleChange} placeholder="How can I help you?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary 
                text-white rounded-lg outline-none border-none font-medium'
                />
              </label>

              <button type='submit'
                className='bg-tertiary py-3 px-8 rounded-xl outline-none 
                w-fit text-white font-bold shadow-md shadow-primary'
              >
                { loading ? 'Sending...' : 'Contact Me' }
              </button>
          </form>

       </motion.div>

      {!isMobile ? (
          
        <motion.div
            variants={slideIn('right', "tween", 0.2, 1)}
            className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] 
            flex'
        >
          <img loading="lazy" src='./globe.png' className='m-auto'/>
        </motion.div>
      ) : (<></>)} 
    </div>
  )
}

export default SectionWrapper(Contact, "contact");
