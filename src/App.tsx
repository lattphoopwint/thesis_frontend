import './App.css';
import NavBar, { Navbar } from './Layouts/NavBarAndFooter/NavBar';
import Footer from './Layouts/NavBarAndFooter/Footer';
import HomePage from './Layouts/HomePage/HomePage';
import AdminPage from './Layouts/AdminPage/AdminPage';
import Info from './Layouts/HomePage/components/Info';
import Carousel from './Layouts/HomePage/components/Carousel';
import Banner from './Layouts/HomePage/components/Banner';
import AddUser from './Layouts/AdminPage/components/AddUser';
import ViewUser from './Layouts/AdminPage/components/ViewUser';
import SignupPage from './Layouts/AccessControlPage/components/SignupPage';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import UserDashboard from './Layouts/UserDashboard/UserDashboard';
import User_NavBar from './Layouts/NavBarAndFooter/User_NavBar';
import DefaultLayout from './DefaultLayout';
import UserLayout from './UserLayout';
import LoginPage  from './Layouts/AccessControlPage/components/LoginPage';
import Logout from './Layouts/AccessControlPage/components/Logout';
import ViewUserDetails from './Layouts/UserDashboard/components/ViewUserDetails';


export const App = () => {


  return (
    <div>
      
      <Routes>

        <Route path='/' element={<DefaultLayout><HomePage /></DefaultLayout>} />

        <Route path="/home" element={<DefaultLayout><HomePage /></DefaultLayout>} />
        
        <Route path='/news' element={<DefaultLayout><Carousel/></DefaultLayout>} />
        
        <Route path='/hello' element={<DefaultLayout><LoginPage /></DefaultLayout>} /> {/*testing cors**/}

        <Route path='/logout' element={<DefaultLayout><Logout /></DefaultLayout>} />
        <Route path='/signin' element={<DefaultLayout><Banner /></DefaultLayout>} />
        <Route path='/register' element={<DefaultLayout><SignupPage /></DefaultLayout>} />
        <Route path='/admin' element={<UserLayout><AdminPage /></UserLayout>} />
        <Route path='/student' element={<UserLayout><UserDashboard /></UserLayout>} />
        <Route path='/info' element={<DefaultLayout><Info /></DefaultLayout>} />
        <Route path='/adduser' element={<AddUser/>} /> {/**for admin users */}
        <Route path='/dashboard' element={<UserLayout><UserDashboard /></UserLayout>} />
        <Route path="/viewuser/:id" element={<ViewUser/>} />
        <Route path="/userDetails" element={<ViewUserDetails/>} />

      </Routes>
      
    </div>
  );
}
