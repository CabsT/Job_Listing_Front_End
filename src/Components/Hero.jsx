import { Link } from "react-router-dom";
import bgimg from "../assets/bgimg.png"

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-400  text-white py-16 px-8 flex">
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Job Today</h1>
        <p className="text-lg mb-8">Empower Your Career With JobLinkers Cutting-edge Job Matching Technology And Explore Thousands Of Job Opportunities With All The Information You Need</p>
        <Link to='/jobs' className="bg-white text-blue-500 px-6 py-2 rounded-lg">Get Started</Link>
        </div>
       <div className="flex-1 flex justify-end">
        <img src={bgimg} alt="Background" />
      </div>
    </div>
  );
};

export default Hero;
