import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import getAuthHeaderConfig from '../../../Config/config.js';

export default function ViewUserDetails() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    role: "",
    email: "",
    status: ""
  });

//   const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);
  
  
  const loadUser = async () => {
    const config = getAuthHeaderConfig();
    const token = localStorage.getItem('token');
    if (token) {
      // Parse the token to get the user id
    const { id } = JSON.parse(atob(token.split('.')[1])); 
    const result = await axios.get(`http://localhost:8080/user/${id}`, config);
    setUser(result.data);}
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {user.status}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name: </b>
                  {user.firstname} {user.lastname}
                </li>
                <li className="list-group-item">
                  <b>Email: </b>
                  {user.email}
                </li>
                <li className="list-group-item">
                  <b>Role: </b>
                  {user.role}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/dashboard"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}