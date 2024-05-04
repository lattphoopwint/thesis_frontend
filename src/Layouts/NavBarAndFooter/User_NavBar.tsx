import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./dropdown-menu-right.css"; 

export const Navbar = () => {

  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Function to get current date and time
    const getCurrentTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
      };
      const formattedTime = now.toLocaleDateString('en-US', options);
      setCurrentTime(formattedTime);
    };

    // Call the function initially
    getCurrentTime();

    // Update time every second
    const interval = setInterval(getCurrentTime, 1000);

    // Cleanup interval
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className='navbar navbar-expand-lg main-color py-3'>
      <div className='container-fluid'>
        <span className='navbar-brand text-light'>SmartLearn</span>
        <button className='navbar-toggler bg-light' type='button'
          data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown' aria-expanded='false'
          aria-label='Toggle Navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
                {/* <a className='nav-link' href="#" >Home</a> */}
              <NavLink className='nav-link' to='/dashboard'>Dashboard</NavLink>
            </li>
            <li className='nav-item'>
                {/* <a className='nav-link' href="#" >News</a> */}
              <NavLink className='nav-link' to='/mycourses'>My Courses</NavLink>
            </li>
            <li>
                {/* <a className='nav-link' href="#" >Information</a> */}
              <NavLink className='nav-link' to='/info'>Information</NavLink>
            </li>
            {/* {authState.isAuthenticated &&
              <li className='nav-item'>
                <NavLink className='nav-link' to='/shelf'>Shelf</NavLink>
              </li>
            } */}
            {/* {authState.isAuthenticated && authState.accessToken?.claims?.userType === 'admin' &&
              <li className='nav-item'>
                <NavLink className='nav-link' to='/admin'>Admin</NavLink>
              </li>
            } */}
          </ul>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item m-1'>
                  <span className='nav-link'>{currentTime}</span>
                </li>
            <li className='nav-item m-1'>
                  <NavLink className='nav-link' to='/notification'>Notification</NavLink>
                </li>
            <li className="nav-item m-1 dropdown" >
              {/* <button
                className=" dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MyProfile
              </button> */}
              <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Action
              </button>
              <ul
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/accountsettings" 
                    onClick={() => {
                      window.location.href = '/userDetails';
                    }}>
                    Account Settings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/grades">
                    Grades
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/preferences">
                    Preferences
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/logout" 
                        onClick={() => {
                        localStorage.clear();
                        window.location.href = '/signin';
                        }}
                  >
                    Log out
                  </Link>
                </li>
              </ul>
            </li>
          
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;