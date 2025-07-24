import React, { useState } from 'react';
import bgimg2 from '../assets/bgimg2.jpg';
import linkedin from '../assets/linkedin.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import TopBar from '../Components/TopBar';

const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('jobSeeker');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Process and handle form submission here

    // Reset form fields
    setName('');
    setEmail('');
    setUserType('jobSeeker');
    setMessage('');
  }

  return (
    <>
      <TopBar />
      <div className="relative" style={{ height: '155vh' }}>
        <img src={bgimg2} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-400 opacity-75" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h3 className="text-xl font-bold mb-4 text-purple-800">Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name:
              </label>
              <input
                id="name"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email:
              </label>
              <input
                id="email"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="userType" className="block text-gray-700 font-bold mb-2">
                User Type:
              </label>
              <select
                id="userType"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                value={userType}
                onChange={(event) => setUserType(event.target.value)}
              >
                <option value="jobSeeker">Job Seeker</option>
                <option value="employer">Employer</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message:
              </label>
              <textarea
                id="message"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
                style={{ minHeight: '150px' }}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              ></textarea>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-purple-500">
          <div className="container mx-auto flex justify-center items-center py-2">
            <img src={linkedin} alt="LinkedIn" className="mr-2" />
            <img src={facebook} alt="Facebook" className="mr-2" />
            <img src={twitter} alt="Twitter" className="mr-2" />
            <img src={instagram} alt="Instagram" className="mr-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
