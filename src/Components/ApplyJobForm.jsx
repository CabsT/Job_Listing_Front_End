import React, { useState } from 'react';
import bgimg from "../assets/bgimg.png";
import { useParams } from 'react-router-dom';

const ApplyJobForm = ({ onSubmit }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [cvFile, setCVFile] = useState(null);

  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();

    const applicationData = {
      jobId: id, 
      fullName,
      email,
      coverLetter,
      cvFile,
    };
    
    onSubmit(applicationData);

    setFullName('');
    setEmail('');
    setCoverLetter('');
    setCVFile(null);
  };

  const handleCVFileChange = (event) => {
    const file = event.target.files[0];
    setCVFile(file);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-400 px-20">
      <div className="w-2/5 p-8 my-2 bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold mb-6">Apply for Job</h1>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">
              Full Name:
            </label>
            <input
              id="fullName"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email:
            </label>
            <input
              id="email"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="coverLetter" className="block text-gray-700 font-bold mb-2">
              Cover Letter:
            </label>
            <textarea
              id="coverLetter"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={coverLetter}
              onChange={(event) => setCoverLetter(event.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="cvFile" className="block text-gray-700 font-bold mb-2">
              Upload CV:
            </label>
            <input
              id="cvFile"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleCVFileChange}
              required
            />
          </div>
          <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="flex-1 flex justify-end">
        <img src={bgimg} alt="Background" />
      </div>
    </div>
  );
};

export default ApplyJobForm;