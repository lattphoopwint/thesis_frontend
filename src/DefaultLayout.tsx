import React, { ReactNode } from 'react';
import Navbar from './Layouts/NavBarAndFooter/NavBar';

interface DefaultLayoutProps {
    children: ReactNode;
  }
  
  const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
      <div>
        <Navbar />
        {children}
      </div>
    );
  };
  
  export default DefaultLayout;