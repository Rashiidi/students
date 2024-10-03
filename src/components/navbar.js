import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <div className='nav'>
      <div className='logo'>
        <Link id="Logo-h1" to="/"><h1>Student Info App</h1></Link>
      </div>
      <div className='nav-links'>
        <Link id='links' to="/">Home</Link>
        <Link id='links' to="/students">Students</Link>
      </div>
    </div>
  );
};

export default NavbarComponent;