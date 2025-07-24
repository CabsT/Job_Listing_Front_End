import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobList from '../Components/JobList';
import notification from '../assets/notification.svg';
import user from '../assets/user.svg';
import search from '../assets/search.svg';
import location from '../assets/location.svg';
import TopBar from '../Components/TopBar';

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocationQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search logic here using searchQuery and locationQuery
    console.log('Search submitted:', searchQuery, locationQuery);
    // Clear the search queries
    setSearchQuery('');
    setLocationQuery('');
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`);
        setJobs(response.data.jobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
  
    fetchJobs();
  }, []);
  
  return (
    <>
      <TopBar />
      <div className="bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-400" style={{ height: '45vh' }}>
        <div className="flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <img src={notification} alt="Notifications" className="h-6 w-6 mr-2" />
          </div>
          <div className="flex items-center">
            <img src={user} alt="User Profile" className="h-6 w-6" />
          </div>
        </div>
        <h1 className="font-bold text-white text-xl px-6 py-2">Find your dream job</h1>
        <div className="flex justify-center px-6 py-2">
          <form className="flex items-center bg-white rounded-full shadow-md w-80" onSubmit={handleSearchSubmit}>
            <img src={search} alt="Search" className="h-3 w-3 ml-4 mr-2" />
            <input
              type="text"
              placeholder="Job title, keyword, or company"
              className="py-1 px-2 outline-none rounded-full text-xxs flex-grow"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>
          <div className="ml-4" />
          <form className="flex items-center bg-white rounded-full shadow-md w-80" onSubmit={handleSearchSubmit}>
            <img src={location} alt="Location" className="h-3 w-3 ml-4 mr-2" />
            <input
              type="text"
              placeholder="city, province, or postal code"
              className="py-1 px-2 outline-none rounded-full text-xxs flex-grow"
              value={locationQuery}
              onChange={handleLocationChange}
            />
          </form>
          <button
            type="submit"
            className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full ml-4"
            onClick={handleSearchSubmit}
          >
            <img src={search} alt="Search" className="h-3 w-3 ml-2 mr-2" />
            Find Jobs
          </button>
        </div>
      </div>
      <JobList jobs={jobs} />
    </>
  );
};

export default JobsPage;
