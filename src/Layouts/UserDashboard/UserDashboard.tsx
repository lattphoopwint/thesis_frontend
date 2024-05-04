import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import ViewCourses from "./components/ViewCourses";

export const UserDashboard = () => {
  return (
      <div>
          
          <ViewCourses/>
          {/* <AddUser/> */}

          
      </div>
  );
}

export default UserDashboard;
