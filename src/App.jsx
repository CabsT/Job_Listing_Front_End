import { Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import AddJobPage from './pages/AddJobPage';
import ApplyJobPage from './pages/ApplyJobPage';
import JobDetailsPage from './pages/JobDetailsPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import JobsPage from './pages/JobsPage';








function App() {



  return (

    <Routes>
      
    <Route path='/' element={<Home />} />
    <Route path='/add-job' element={<AddJobPage />}/>
    <Route path='/jobs/:id/apply' element={<ApplyJobPage />}/>
    <Route path="/job/:id" element={<JobDetailsPage/>} /> 
    <Route path="/about-us" element={<AboutUsPage />} />
    <Route path="/contact" element={<ContactUsPage />} />
    <Route path='/jobs' element={<JobsPage />} />
    

    </Routes>
    
    

  )
}

export default App;

