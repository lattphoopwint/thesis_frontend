// import { Link, NavLink } from "react-router-dom";
// import { useOktaAuth } from '@okta/okta-react';
// import { SpinnerLoading } from "../Utils/SpinnerLoading";

import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {

  return (
    <nav className='navbar navbar-expand-lg main-color py-3'>
      <div className='container-fluid'>
        <span className='navbar-brand text-light'>SmartLearn</span>
        <button className='navbar-toggler' type='button'
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
              <NavLink className='nav-link' to='/home'>Home</NavLink>
            </li>
            <li className='nav-item'>
                {/* <a className='nav-link' href="#" >News</a> */}
              <NavLink className='nav-link' to='/news'>News</NavLink>
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
                <Link type='button' className='btn btn-outline-light' to='/signin'>Sign in</Link>
              </li>
          <li className='nav-item m-1'>
                <Link type='button' className='btn btn-outline-light' to='/register'>Register</Link>
              </li>
            {/* {!authState.isAuthenticated ?
              <li className='nav-item m-1'>
                <Link type='button' className='btn btn-outline-light' to='/login'>Sign in</Link>
              </li>
              :
              <li>
                <button className='btn btn-outline-light' onClick={handleLogout}>Logout</button>
              </li>
            } */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;