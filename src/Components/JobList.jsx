import React from 'react';
import { useNavigate } from 'react-router-dom';


const JobList = ({ jobs }) => {
  const handleApply = (jobId) => {
    console.log(`Applying for job with ID: ${jobId}`);
  };
  const navigate = useNavigate();

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Recommended for you</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="border-b border-gray-300 rounded-t-lg px-4 py-2">
              <span className="text-sm font-semibold text-gray-500">Closing Date:</span>
              <span className="text-sm text-gray-700">{job.closingdate}</span>
            </div>
            <div className="px-4 py-2">
              <h3 className="text-lg font-bold mb-2">{job.jobtitle}</h3>
              <p className="text-sm text-gray-500 mb-2">{job.companyname}</p>
              <p className="text-xs bg-gray-200 text-gray-700 py-1 px-2 rounded-md inline-block mb-2">
                {job.location}
              </p>
              <p className="text-xs bg-gray-200 text-gray-700 py-1 px-2 rounded-md inline-block mb-4">
                {job.contact}
              </p>
              <div className="flex">
                <div className="mr-2">
                  <div className="text-xs bg-orange-500 text-white px-2 py-1 rounded-l-md shadow-md hover:bg-orange-600 transition-colors duration-200 inline-block">
                    {job.employmentstatus}
                  </div>
                </div>
                <div>
                  <div className="text-xs bg-purple-500 text-white px-2 py-1 rounded-r-md shadow-md hover:bg-purple-600 transition-colors duration-200 inline-block">
                    {job.qualification}
                  </div>
                </div>
              </div>
              <button
             className="bg-black text-white px-4 py-2 rounded-r-md shadow-md hover:bg-gray-900 transition-colors duration-200 inline-block mt-2"
             onClick={() => {
             navigate(`/job/${job.id}`);
             handleApply(job.id);
             }}
             >
            Details
           </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;