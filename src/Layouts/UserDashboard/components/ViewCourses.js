import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import getAuthHeaderConfig from '../../../Config/config.js';
import {
  MDBContainer,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';


export default function ViewCourses() {
    const [courses, setCourses] = useState([]); // Ensuring courses is always an array
    console.log(courses);
//   const { id } = useParams();

  useEffect(() => {
    loadCourse();
  }, []);
  
  
  const loadCourse = async () => {
    const config = getAuthHeaderConfig();
    const token = localStorage.getItem('token');
    if (token) {
      // Parse the token to get the user id
    const { id } = JSON.parse(atob(token.split('.')[1])); 
    console.log(id);
    const result = await axios.get(`http://localhost:8080/user/${id}/courses`, config);
    console.log(result.data);
    setCourses(result.data);}
    console.log(courses);
    console.log(Array.isArray(courses));
  };

  return (
    <MDBContainer>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4 mt-3'>
        {courses.map((course, index) => (
          <MDBCol key={index}>
            <MDBCard className='h-100'>
              {/* You can replace the image with course-specific images */}
              <MDBCardImage
                src={`https://mdbootstrap.com/img/new/standard/city/0${index + 41}.webp`}
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>{course.courseCode}</MDBCardTitle>
                <MDBCardText>{course.courseName}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>

  );
}
