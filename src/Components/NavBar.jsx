import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

const NavBar = () => {
  return (
    <div className='nav-bar py-3'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to="/" className="w-[124px] h-[32px]">
          <img src={logo} alt="Job listing site" />
        </Link>
        <ul className='flex gap-6'>
          <li>
              <a href="#" className='font-bold text-[#1e61a3]'>Home</a>
          </li>
          <li>
              <Link Link to="/add-job" className='font-bold text-[#1e61a3]'>For Company</Link>
          </li>
          <li>
              <Link to='/jobs' className='font-bold text-[#1e61a3]'>Find Jobs</Link>
          </li>
          <li>
              <Link to='/about-us' className='font-bold text-[#1e61a3]'>About Us</Link>
          </li>
        </ul>
        <div className='flex items-center gap-6'>
          <button className='bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]'>Log in</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar;