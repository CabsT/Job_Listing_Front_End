import React from 'react';
import { Link } from 'react-router-dom';


//If you have a JobList component that receives an array of job objects as a prop, you can map through the jobs
// and render a JobItem component for each job.
//When you render the JobDetailsPage component and pass a job object, 
//it will display the details of that specific job using the JobItem component.


const JobItem = ({ job }) => {
  if (!job) {
    return null;
  }
  return (

    //The JobItem component receives the job prop and uses it to display the job title, description, qualification, employmentstatus,location anc contact. 
    <div>
      <h2>{job.jobtitle}</h2>
      <p>{job.companyname}</p>
      <p>{job.description}</p>
      <p>{job.qualification}</p>
     <p>{job.employmentstatus}</p>
      <p>{job.location}</p>
      <p>{job.contact}</p>
      <p>{job.closingdate}</p>
    </div>
  )
      
};

export default JobItem;