import React from 'react';
import { useParams } from 'react-router-dom';
import TopBar from '../Components/TopBar';
import ApplyJobForm from '../Components/ApplyJobForm';
import axios from 'axios';

const ApplyJobPage = () => {
  const { id } = useParams(); 

  const handleSubmitJobApplication = (applicationData) => {
    axios.post(`${import.meta.env.VITE_API_URL}/jobs/${id}/apply`, applicationData)
      .then(response => {
        console.log('Application submitted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error submitting application:', error);
      });
  };

  return (
    <>
      <TopBar />
      <ApplyJobForm onSubmit={handleSubmitJobApplication} />
    </>
  );
};

export default ApplyJobPage;