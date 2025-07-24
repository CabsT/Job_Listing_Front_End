
import React, { useState } from 'react';
import bgimg from "../assets/bgimg.png";
import axios from 'axios';

const AddJobForm = ({ onSubmit }) => {
  const [jobtitle, setJobTitle] = useState('');
  const [companyname, setCompanyName] = useState('');
  const [description, setDescription] = useState('');
  const [qualification, setQualification] = useState('');
  const [employmentstatus, setEmploymentstatus] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [closingdate, setClosingDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newJob = {
      jobtitle,
      companyname,
      description,
      qualification,
      employmentstatus,
      location,
      contact,
      closingdate,
    };
    console.log(newJob);

    if (typeof onSubmit === 'function') {
      onSubmit(newJob);
    }
    
    axios
      .post(`${import.meta.env.VITE_API_URL}/add-job`, newJob)
      .then((response) => {
        console.log(response.data);

        setJobTitle('');
        setCompanyName('');
        setDescription('');
        setQualification('');
        setEmploymentstatus('');
        setLocation('');
        setContact('');
        setClosingDate('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-400 px-20">
      <div className="w-2/5 p-8 my-2 bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold mb-6">Add Job</h1>
          <div className="mb-4">
            <label htmlFor="jobTitle" className="block text-gray-700 font-bold mb-2">Job Title:</label>
            <input
              id="jobTitle"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              value={jobtitle}
              onChange={(event) => setJobTitle(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">Company Name:</label>
            <input
              id="companyName"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              value={companyname}
              onChange={(event) => setCompanyName(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description:</label>
            <textarea
              id="description"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="qualification" className="block text-gray-700 font-bold mb-2">Higher education qualifications required:</label>
            <select
              id="qualification"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={qualification}
              onChange={(event) => setQualification(event.target.value)}
            >
              <option value="">Select</option>
              <option value="Higher Certificate or National/Vocational Certificate">Higher Certificate or National/Vocational Certificate</option>
              <option value="National Diploma">National Diploma</option>
              <option value="Bachelor's degree">Bachelor's degree</option>
              <option value="Honors degree">Honors degree</option>
              <option value="Master's degree">Master's degree</option>
              <option value="Doctor's degree">Doctor's degree</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="employmentStatus" className="block text-gray-700 font-bold mb-2">Employment Status:</label>
            <select
              id="employmentStatus"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={employmentstatus}
              onChange={(event) => setEmploymentstatus(event.target.value)}
            >
              <option value="">Select</option>
              <option value="Permanent">Permanent</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location:</label>
            <input
              id="location"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-gray-700 font-bold mb-2">Email:</label>
            <input
              id="contact"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="email"
              value={contact}
              onChange={(event) => setContact(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="closingDate" className="block text-gray-700 font-bold mb-2">Closing Date:</label>
            <input
              id="closingDate"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              placeholder="DD Month YYYY"
              value={closingdate}
              onChange={(event) => setClosingDate(event.target.value)}
            />
          </div>
          <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg" type="submit">Submit</button>
        </form>
      </div>
    
      <div className="flex-1 flex justify-end">
        <img src={bgimg} alt="Background" />
      </div>
    </div>
  );
};

export default AddJobForm;