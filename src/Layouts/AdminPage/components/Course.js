import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import getAuthHeaderConfig from '../../../Config/config.js';


export const Course = () => {

    const [courses, setCourses] = useState([]);
   
    // const {userId} = useParams();

    useEffect(()=>{
        loadCourses();
    },[]);

    const config = getAuthHeaderConfig(); 


    const loadCourses = async () => {
        try {
            
            const result = await axios.get("http://localhost:8080/courses", config);
            setCourses(result.data);
        } catch (error) {
            console.error("Error loading users:", error);
        }
    }

    const handleDelete = async (courseId) => {
        try {
            const response = await axios.delete(`http://localhost:8080/user/delete/${courseId}`, config);
            
            // Handle successful deletion
            console.log(response.data); // Log the response message
            // Optionally, you can reload the user list or update state after deletion
            window.location.reload();
            
        } catch (error) {
            console.error("Error deleting user:", error);
            // Handle error
        }
    }

    console.log(courses);
    

    return(
        <MDBContainer>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container-fluid">


                    <Link className='btn btn-outline-light' to='/addcourse'>Add Course</Link>
                </div>
            </nav>
            <div className="py-4">
                <MDBTable hover responsive>
                    <MDBTableHead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Course Code</th>
                            <th scope="col">Course Name</th>
                            {/* <th scope="col">Faculty</th> */}
                            <th scope="col">Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {courses.map((course, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{course.id}</td>
                                <td>{course.courseCode}</td>
                                <td>{course.courseName}</td>
                                <td>
                                    <Link
                                        className="btn btn-primary mx-2"
                                        to={`/viewuser/${course.id}`}
                                    >
                                        View
                                    </Link>
                                    <MDBBtn color="primary" className="mx-2" >
                                        Edit
                                    </MDBBtn>
                                    <MDBBtn color="danger" className="mx-2" onClick={() => handleDelete(course.id)}>
                                        <MDBIcon icon="trash" />
                                    </MDBBtn>
                                </td>
                            </tr>
                        ))}
                    </MDBTableBody>
                </MDBTable>
            </div>
    </MDBContainer>
    );
}

export default Course;