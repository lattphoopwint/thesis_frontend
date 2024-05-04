import { useEffect, useState } from "react";

export const Logout = () => {

  const [token, setToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      localStorage.clear();
    }
  }, []);
  

  return(
    <h1>Logout Success!</h1>
    
  )
}

export default Logout;