import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import '../App.css'; // or import '../index.css';


const HomePage = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionsRef = useRef([]);

  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisibleSections((prev) => ({
          ...prev,
          [entry.target.id]: true,
        }));
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section with Background Image */}
      <header
        className="h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/webdev.jpg')" }}
      >
        <div className="h-full flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl text-white font-bold animate-fade-in-down">
            Welcome to  Career Explorer
          </h1>
          <p className="text-lg font-bold md:text-xl text-gray-300 mt-4 animate-fade-in-up">
          Dream big, code smart, design better, and innovate always
          </p>
        </div>
      </header>

      {/* New About Section */}
      <section 
        id="about" 
        ref={(el) => (sectionsRef.current[0] = el)}
        className={`min-h-screen flex items-center justify-center text-#1a1a2e ${visibleSections['about'] ? 'animate-float-in-down' : 'opacity-0'}`}
        style={{ backgroundColor: 'white' }}
      >
        <div className="bg-opacity-60 p-8 rounded-lg text-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg delay-100">
            Founded in 2024 by Ade's-Tech, we are dedicated to helping individuals explore their career options and make informed decisions. We understand that navigating career paths can be overwhelming, which is why we offer resources, mentorship, and insights to empower our users.

            Our team consists of industry professionals with extensive experience, ensuring that our content is both relevant and practical. We strive to create a supportive community where individuals can connect, share experiences, and learn from one another.
          </p>
        </div>
      </section>

      {/* Grid Section for Career Fields */}
      <section className="p-8 sm:p-12 lg:p-16 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web Development Grid Box */}
          <div className="relative group">
            <img src="/web1.jpg" alt="Web Development" className="w-full h-64 object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              
              <p className="text-white text-lg text-center"> Transforming Ideas into Interactive Realities</p>
              
            </div>
          </div>
          {/* Design Grid Box */}
          <div className="relative group">
            <img src="/design1.jpg" alt="Design" className="w-full h-64 object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-white text-lg text-center">Designing for the People, Shaping the Future</p>
            </div>
          </div>
          {/* AI Grid Box */}
          <div className="relative group">
            <img src="/AI1.jpg" alt="AI" className="w-full h-64 object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-white text-lg text-center">Transforming Data into Intelligent Action</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section 
        id="mission" 
        ref={(el) => (sectionsRef.current[1] = el)}
        className={`p-8 sm:p-12 lg:p-16 bg-white ${visibleSections['mission'] ? 'animate-float-in-down' : 'opacity-0'}`}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-#1a1a2e-700 mb-4 text-center">
            At Ade's-Tech, our mission is to equip individuals with comprehensive information and guidance across various fields, including Web Development, Design, AI, and more. We aim to be your trusted partner in exploring the evolving landscape of different industries, uncovering new opportunities, and providing the tools needed to succeed.
          </p>
        </div>
      </section>


       {/* why you need to be in tech field  */}
<section 
  id="mission" 
  ref={(el) => (sectionsRef.current[1] = el)}
  className={`p-8 sm:p-12 lg:p-16 bg-white ${visibleSections['mission'] ? 'animate-float-in-down' : 'opacity-0'}`}
>
  <div className="container mx-auto">
    
   
    <h3 className="text-2xl text-#1a1a2e font-bold mb-4 text-center">Why You Need to Be in the Tech Field</h3>
    <ul className="list-disc list-inside text-lg text-center">
      <li>Digital Transformation: Businesses increasingly need skilled professionals to create and maintain online platforms.</li>
      <li>Creative Expression:Blend creativity with technology to design visually appealing and user-friendly experiences.</li>
      <li>Career Opportunities:High demand for tech professionals offers numerous job opportunities across industries.</li>
      <li>Innovation and Problem-Solving: Tackle real-world problems with innovative solutions that enhance user experience.</li>
      <li>Continuous Learning: Stay engaged and grow as the tech industry evolves with new trends and technologies.</li>
    </ul>
  </div>
</section>

    </div>
  );
};

export default HomePage;

