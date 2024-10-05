import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'; // Import HomePage
import Services from './components/Services'; // Import Services component
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Replace with your own email sending API endpoint
    const response = await fetch('https://your-email-sending-api.com/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    } else {
      alert('Error sending message. Please try again later.');
    }
  };

  return (
    <div>
      <Navbar />
      <HomePage /> {/* Render the HomePage component which contains the hero section */}

      {/* Services Section */}
      <section id="services" className="min-h-screen bg-gray-300">
        <h2 className="text-3xl font-bold text-#1a1a2e text-center my-6">Our Services</h2>
        <Services /> {/* Add the Services component here */}
      </section>

      <section id="contact" className="min-h-screen font-bold bg-gray-700 flex flex-col items-center justify-center p-8">
        <h2 className="text-3xl text-white mb-4">Contact Us</h2>
        <p className="text-lg text-white mb-4 text-center">
          You can contact us to start your career journey; we are available to guide you till we see you in flying colors.
        </p>
        <p className="text-lg text-orange mb-4 text-center">Contact us on:</p>
        <div className="flex space-x-4 mb-4">
          <a href="https://www.linkedin.com/in/emmanuel-adewunmi-613512308" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition duration-300">
            <FaLinkedin size={32} />
          </a>
          <a href="https://www.instagram.com/adenuel_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition duration-300">
            <FaInstagram size={32} />
          </a>
          <a href="https://wa.me/+2349023490952" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition duration-300">
            <FaWhatsapp size={32} />
          </a>
        </div>
        <p className="text-lg text-white mb-4 text-center">
          You can check out our projects on 
          <a href="https://github.com/adenueltech" target="_blank" rel="noopener noreferrer" className="underline text-orange-400"> GitHub</a>.
          <FaGithub size={32} className="inline-block ml-2 text-white hover:text-orange-400 transition duration-300" />
        </p>
        <form onSubmit={handleSubmit} className="p-6 rounded shadow-md w-full max-w-md">
          <h3 className="text-xl text-white font-semibold mb-4 text-center">Send Us a Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded border-gray-300 w-full mb-4"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded border-gray-300 w-full mb-4"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="border p-2 rounded border-gray-300 w-full mb-4"
            rows="4"
            required
          />
          <button
            type="submit"
            className="w-full bg-gray-900 text-white p-2 rounded hover:bg-orange-800 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} developed @ Ade's-Tech.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
