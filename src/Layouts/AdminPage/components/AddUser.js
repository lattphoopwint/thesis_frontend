import React,{useState, useEffect} from "react";
import axios from "axios";
import {
	MDBContainer, MDBInput, MDBSelect
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

function AddUser() {

    const[uniqueCode, setUniqueCode] = useState('');
    const [firstname, setFirstName] = useState('');
	const [lastname, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState('USER');
    const [status, setStatus] = useState('');
	const [error, setError] = useState(''); // State to manage error messages 

    useEffect(()=>{
        checkToken();
    },[]);

    const checkToken = () => {
        console.log(localStorage.getItem('token'));
    }

	const handleSubmit = async () => {
		try {
            const token = localStorage.getItem('token'); // Replace "your-bearer-token" with the actual bearer token
            console.log(token);
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            console.log(config);
            
			// Check for empty fields 
			if (!uniqueCode || !firstname || !lastname || !email || !password || !role || !status) {
				setError('Please fill in all fields.');
				return;
			}

			// if (password !== confirmPassword) {
			// 	throw new Error("Passwords do not match");
			// }

			// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

			const response = await axios.post('http://localhost:8080/saveUser', {
                uniqueCode,
				firstname,
				lastname,
				email,
				password,
				role,
                status
			}, config);
			// Handle successful signup 
			console.log(response.data); //return token
			window.location.href = '/admin'; 
		} catch (error) {
			// Handle signup error 
			console.error('Submit failed:', error.response ? error.response.data : error.message);
			setError(error.response ? error.response.data : error.message);
		}
	};

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
			<div className="border rounded-lg p-4" style={{ width: '600px', height: 'auto' }}>
				<MDBContainer className="p-3">
					<h2 className="mb-4 text-center">Add New User</h2>
					{/* Render error message if exists */}
					{error && <p className="text-danger">{error}</p>}
                    <MDBInput label="Unique Code" id="uniqueCode" type="text" value={uniqueCode} onChange={(e) => setUniqueCode(e.target.value)} />
					<br/>
					<MDBInput label="First Name" id="firstname" type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
					<br/>
					<MDBInput label="Last Name" id="lastname" type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} />
					<br/>
					<MDBInput label="Email Address" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
					<br/>
					<MDBInput label="Password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					<br/>
					<MDBInput label="Status" id="status" type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
					<br/>
					<label className="form-label mb-1">Role:</label>
					<select className="form-select mb-4" value={role} onChange={(e) => setRole(e.target.value)}>
						<option value="USER">Student</option>
						<option value="ADMIN">Teacher</option>
						<option value="ADMIN">Admin</option>
					</select>
					<button className="mb-4 d-block mx-auto btn btn-primary"
						style={{ height: '40px', width: '100%' }}
						onClick={handleSubmit}>Sign Up
					</button>
					<Link className="btn btn-primary my-2" to={"/admin"}>
						Back to Home
					</Link>
				</MDBContainer>
				
			</div>
			
		</div>
    );
}

export default AddUser;
