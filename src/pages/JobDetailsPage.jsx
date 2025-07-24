import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import JobItem from '../Components/JobItem';
import TopBar from '../Components/TopBar';
import { Link } from 'react-router-dom';

const JobDetailsPage = () => {
  const [job, setJob] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/jobs/${id}`);
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (!job) {
    return <div>Job not found.</div>;
  }

  return (
    <div className="bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-400 min-h-screen ">
      <TopBar />

      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4 text-white">Job Details</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <JobItem job={job} />
          <Link to={`/jobs/${id}/apply`}>
            <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg mt-4" type="button">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;