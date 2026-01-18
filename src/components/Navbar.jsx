import React, { useState } from 'react';
import { Link } from 'react-scroll';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black/90 backdrop-blur-sm border-b border-white/10`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo/Brand */}
        <Link 
          to="/" 
          spy={true} 
          offset={50} 
          duration={500}
          smooth={true}
          className='flex items-center gap-3 cursor-pointer'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* Use any of the logo options above */}
          <div className='relative w-10 h-10 rounded-md bg-[#0a0a0a] border border-[#915eff]/30 flex items-center justify-center group hover:border-[#915eff] transition-colors'>
            <div className='absolute top-1 left-1 w-1 h-1 bg-green-400 rounded-full opacity-60'></div>
            <span className='text-[#915eff] font-mono font-bold text-lg group-hover:text-white transition-colors'>
              A_
            </span>
          </div>
          
          <div className='flex flex-col'>
            <p className='text-white text-[16px] font-bold leading-tight'>
              Muhammad Abdullah Aziz
            </p>
            <p className='text-white/60 text-[11px] hidden sm:block'>
              Full-Stack Engineer
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li 
              key={link.id} 
              className={`${
                active === link.title ? "text-white" : "text-white/70"
              } hover:text-white text-[16px] font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className='sm:hidden flex items-center'>
          <button
            onClick={() => setToggle(!toggle)}
            className='w-10 h-10 flex items-center justify-center'
            aria-label="Toggle menu"
          >
            <img 
              src={toggle ? close : menu} 
              alt="menu"
              className='w-[24px] h-[24px] object-contain' 
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`${
            !toggle ? "hidden" : "flex"
          } sm:hidden absolute top-[70px] right-0 mx-4 my-2 min-w-[200px] bg-black/95 backdrop-blur-lg border border-white/10 rounded-xl p-6 z-10 shadow-xl`}
        >
          <ul className='list-none flex flex-col gap-4 w-full'>
            {navLinks.map((link) => (
              <li 
                key={link.id} 
                className={`${
                  active === link.title ? "text-white" : "text-white/70"
                } text-[16px] font-medium cursor-pointer hover:text-white transition-colors`}
                onClick={() => { 
                  setActive(link.title);
                  setToggle(false);
                }}
              >
                <a href={`#${link.id}`} className='block py-2'>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;