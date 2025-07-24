import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

const TopBar = () => {
  return (
      <div className='py-3'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to="/" className="w-[124px] h-[32px]">
          <img src={logo} alt="Job listing site" />
        </Link>
    
      </div>
    </div>
  )
}

export default TopBar;