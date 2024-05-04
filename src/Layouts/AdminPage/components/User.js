import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import getAuthHeaderConfig from '../../../Config/config.js';


export const User = () => {

    const [users, setUsers] = useState([]);
   
    // const {userId} = useParams();

    useEffect(()=>{
        loadUsers();
    },[]);

    const config = getAuthHeaderConfig(); 


    const loadUsers = async () => {
        try {
            
            const result = await axios.get("http://localhost:8080/users", config);
            setUsers(result.data);
            console.log(users);
        } catch (error) {
            console.error("Error loading users:", error);
        }
    }

    const handleDelete = async (userId) => {
        try {
            const response = await axios.delete(`http://localhost:8080/user/delete/${userId}`, config);
            
            // Handle successful deletion
            console.log(response.data); // Log the response message
            // Optionally, you can reload the user list or update state after deletion
            window.location.reload();
            
        } catch (error) {
            console.error("Error deleting user:", error);
            // Handle error
        }
    }

    console.log(users);
    

    return(
        <MDBContainer>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container-fluid">


                    <Link className='btn btn-outline-light' to='/adduser'>Add User</Link>
                </div>
            </nav>
            <div className="py-4">
                <MDBTable hover responsive>
                    <MDBTableHead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">ID</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link
                                        className="btn btn-primary mx-2"
                                        to={`/viewuser/${user.id}`}
                                    >
                                        View
                                    </Link>
                                    <MDBBtn color="primary" className="mx-2" >
                                        Edit
                                    </MDBBtn>
                                    <MDBBtn color="danger" className="mx-2" onClick={() => handleDelete(user.id)}>
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

export default User;