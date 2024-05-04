import { ReactNode } from "react";
import Navbar from "./Layouts/NavBarAndFooter/User_NavBar";

interface UserLayoutProps {
    children: ReactNode;
  }
  
  const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
    return (
      <div>
        <Navbar />
        {children}
      </div>
    );
  };
  
  export default UserLayout;