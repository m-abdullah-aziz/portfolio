import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from '../hoc';

// Simple mobile card without the timeline library
const MobileExperienceCard = ({ experience }) => (
  <div className="mb-8 bg-[#1d1836] rounded-xl p-6 border-l-4 border-[#915eff]">
    <div className="flex items-start justify-between mb-2">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full flex items-center justify-center" 
             style={{ background: experience.iconBg }}>
          <img 
            src={experience.icon} 
            alt={experience.company_name}
            className="w-8 h-8 object-contain"
          />
        </div>
        <div>
          <h3 className="text-white text-[18px] font-bold">
            {experience.title}
          </h3>
          <p className="text-secondary text-[14px] font-semibold">
            {experience.company_name}
          </p>
        </div>
      </div>
    </div>
    <p className="text-secondary text-[12px] mb-3">{experience.date}</p>
    <ul className="list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[13px] pl-1"
        >
          {point}
        </li>
      ))}
    </ul>
  </div>
);

// Desktop version with timeline
const DesktopExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {experience.title}
      </h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
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
    <>
      <motion.div>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="mt-20">
        {isMobile ? (
          // Mobile: Simple cards
          <div className="flex flex-col gap-0">
            {experiences.map((experience, index) => (
              <MobileExperienceCard key={index} experience={experience} />
            ))}
          </div>
        ) : (
          // Desktop: Full timeline
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <DesktopExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");