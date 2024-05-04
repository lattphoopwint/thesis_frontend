import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook 
import {
	MDBContainer, MDBInput, MDBSelect
} from 'mdb-react-ui-kit';

function SignupPage() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [role, setRole] = useState('USER');
	const [error, setError] = useState(''); // State to manage error messages 
	const history = useNavigate(); // Get the history object for redirection 


	const handleSignup = async () => {
		try {
			// Check for empty fields 
			if (!firstName || !lastName || !email || !password || !confirmPassword || !role) {
				setError('Please fill in all fields.');
				return;
			}

			if (password !== confirmPassword) {
				throw new Error("Passwords do not match");
			}

			// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

			const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
				firstName,
				lastName,
				email,
				password,
				role
			});
			// Handle successful signup 
			console.log(response.data); //return token
			history('/signin');
		} catch (error) {
			// Handle signup error 
			console.error('Signup failed:', error.response ? error.response.data : error.message);
			setError(error.response ? error.response.data : error.message);
		}
	};

	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			<div className="border rounded-lg p-4" style={{ width: '600px', height: 'auto' }}>
				<MDBContainer className="p-3">
					<h2 className="mb-4 text-center">Sign Up Page</h2>
					{/* Render error message if exists */}
					{error && <p className="text-danger">{error}</p>}
					<MDBInput label="First Name" id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
					<br/>
					<MDBInput label="Last Name" id="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
					<br/>
					<MDBInput label="Email Address" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
					<br/>
					<MDBInput label="Password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					<br/>
					<MDBInput label="Confirm Password" id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
					<br/>
					<label className="form-label mb-1">Role:</label>
					<select className="form-select mb-4" value={role} onChange={(e) => setRole(e.target.value)}>
						<option value="USER">Student</option>
						<option value="ADMIN">Teacher</option>
						<option value="ADMIN">Admin</option>
					</select>
					<button className="mb-4 d-block mx-auto btn btn-primary"
						style={{ height: '40px', width: '100%' }}
						onClick={handleSignup}>Sign Up
					</button>
					<div className="text-center">
						<p>Already Register? <a href="/">Login</a></p>
					</div>
				</MDBContainer>
			</div>
		</div>
	);
}

export default SignupPage; 
