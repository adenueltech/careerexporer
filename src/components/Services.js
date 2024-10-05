

import React from 'react';

const servicesData = [
  { title: 'Web Development', description: 'Web development involves building websites and web applications, combining front-end design with back-end logic to create responsive, functional, and user-friendly online experiences.', imageUrl: '/webdev2.jpg' },
  { title: 'Web-Design', description: 'UI/UX design focuses on creating intuitive, visually appealing interfaces and ensuring seamless user experiences by balancing aesthetics with usability and functionality.', imageUrl: '/uiux.jpg' },
  { title: 'AI', description: 'Artificial Intelligence (AI) empowers machines to learn, adapt, and make decisions, automating complex tasks. It transforms industries by enhancing efficiency, prediction, and problem-solving.', imageUrl: '/AI1.jpg' },
  { title: 'Cyber Security', description: 'Cybersecurity involves protecting systems, networks, and data from digital attacks. It ensures the confidentiality, integrity, and availability of sensitive information, safeguarding against cyber threats.', imageUrl: '/cyber.jpg' },
  { title: 'Data-analysis', description: 'Data analysis is the process of inspecting, cleaning, and interpreting data to extract meaningful insights. It helps in making informed decisions, identifying patterns, and solving complex problems.', imageUrl: '/data.jpg' },
  { title: 'Digital-Marketting', description: 'Digital marketing uses online platforms to reach target audiences and promote brands. It focuses on boosting engagement and driving sales through digital strategies.', imageUrl: '/digital.jpg' },
  { title: 'Project-management', description: 'Project management involves planning and executing projects to achieve specific goals within a set timeframe and budget. It focuses on coordinating resources and managing risks for successful outcomes.', imageUrl: '/project.jpg' },
  { title: 'Graphic-Design', description: 'Graphic design combines art and technology to create visual content that communicates ideas effectively. It enhances user experiences and drives engagement in various media.', imageUrl: '/graphic.jpg' },
  { title: 'Game-Development', description: 'Game development involves creating interactive video games through a blend of programming, design, and storytelling. It focuses on engaging players by combining visual art, sound, and gameplay mechanics.', imageUrl: '/game.jpg' },
  // Add more services as needed
];

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {servicesData.map((service, index) => (
        <div key={index} className="relative group hover:bg-gray-300 rounded-lg overflow-hidden">
          <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-center ">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;

