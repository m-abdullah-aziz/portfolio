import {
    awsLogo,
    javaSpringLogo,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    systemsLogo,
    ssiLogo,
    rbLogo,
    mpLogo,
    autosoftLogo,
    carrent,
    jobit,
    tripguide,
    threejs,
    djangoLogo,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Java SpringBoot",
      icon: javaSpringLogo,
    },
    {
      title: "Python Django",
      icon: djangoLogo,
    },
    {
      title: "Reactjs",
      icon: reactjs,
    },
    {
      title: "AWS",
      icon: awsLogo,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Senior Backend Engineer",
      company_name: "Moniepoint Group",
      icon: mpLogo,
      iconBg: "#FFFFFF",
      date: "Dec 2021 - Present",
      points: [
        "Working with Moniepoint Group Nigeria to help build Nigeria's next payment solutions.",
        "Mostly focused on payments via POS and designed backend systems for developers portal, repairing and management POS inventory.",
        "Senior Backend enginer working with Java Springboot, Kafka, Kubernetes, Docker and Next.js"
      ],
    },
    {
      title: "Software Engineer II",
      company_name: "Remotebase",
      icon: rbLogo,
      iconBg: "#FFFFFF",
      date: "Dec 2021 - Present",
      points: [
        "Working with Walnut; a financial technology company that deals with resolving healthcare finance issues in the US. Primarily focused as a backend engineer with Java Springboot, AWS and MySQL",
        "Worked with SWVL as a fullstack software engineer on swvl.com/travel website optimization. Utilizing Kubernetes, Node.js, React.js, MongoDb, Redis and GCP",
        "Worked on the remotebase platform, utilizing technology stack that involves AWS amplify, Dynamo Db, AWS serverless lambdas, AWS Cognito, Appsync, Python and React.js"
      ],
    },
    {
      title: "Junior Consultant",
      company_name: "Systems Limited",
      icon: systemsLogo,
      iconBg: "#FFFFFF",
      date: "Jul 2021 - Nov 2021",
      points: [
        "Worked as a part of integration frameworks department. Etisalat is the client for whom I developed full stack solutions with java and angular. Integrated multiple modules and communicated with team to develop the most efficient solutions",
        "Also worked on Node.js with a team handling the Easypaisa web application for vendors. I helped the team focus on modularisation and streamlined productivity by providing reusable code"
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Strategic Systems International",
      icon: ssiLogo,
      iconBg: "#FFFFFF",
      date: "Jul 2020 - Jul 2021",
      points: [
        "Worked with technologies including Java SpringBoot and AWS cloud technologies (Lambda functions, S3, EC2, cloud watch, Redshift and RDS). Utilized micro-service architecture",
        "Worked on python based scrappers to scrape data related to different products on walmart and amazon on different client accounts to provide statistics",
        "I worked with Flywheel Digital on their search functionality mainly which was centered around providing user statistics for different keywords and products"
      ],
    },
    {
      title: "Programmer",
      company_name: "Autosoft Dynamic",
      icon: autosoftLogo,
      iconBg: "#FFFFFF",
      date: "Jul 2019 - May 2020",
      points: [
        "Worked with Python, ASP.NET MVC, JQUERY, MS SQL Server, Elasticsearch, Logstash and Kibana",
        "Made POC to provide example of how the banking domain could utilize elastic search and reverse index based searches",
        "Developed pipeline using logstash to port existing warehousing data to elastic search for faster querying",
        "Trained different engineers regarding using Elastic search and about concepts related to indexing and information retrieval"
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };