import React from 'react';
import { Link } from 'react-router-dom';
import bgimg2 from '../assets/bgimg2.jpg'
import linkedin from '../assets/linkedin.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import TopBar from '../Components/TopBar'

const AboutUsPage = () => {
  return (
    <>
      <TopBar />
      <div className="relative" style={{ height: '135vh' }}>
        <img src={bgimg2} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-400 opacity-75" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h3 className="text-xl font-bold mb-4 text-purple-800">About Us</h3>
        <h4 className="text-m font-bold mb-4 text-indigo-700">Our Vision</h4>
         <p className="text-s mb-8 text-indigo-800">
            JobLinker is one of the best job sites in the world with over 100M active users. At JobLinker we strive to revolutinize the job search process for both job seekers and employers. We believe that the traditional job search is outdated and time-consuming, which is why we have developed cutting-edge technology to match applicants to their suitable jobs seamlessly. 
          </p>
          <h4 className="text-m font-bold mb-4 text-indigo-700">Our Team</h4>
          <p className="text-s mb-8 text-indigo-800">
            Our Team is the backbone of our platform. From our dedicated team of developers to our experienced customer support staff, we are committed to providing the best possible experience for both job seekers and employers.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Help Center
            </button>
            <Link to="/contact" className="bg-blue-500 text-white py-2 px-4 rounded">
        Contact Us
      </Link>
          </div>
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
}


export default AboutUsPage;
