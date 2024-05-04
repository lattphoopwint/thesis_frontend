import { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';


export const Banner = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
  
    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:8080/api/v1/auth/authenticate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
          const data = await response.json();
          console.log("response : ", response);
          console.log("data : ",data);
          // Store token in local storage or session storage
          localStorage.setItem('token', data.token);
          // Redirect to dashboard or other authenticated page
          redirectToDashboard();
          // window.location.href = '/dashboard'; //todo implement dashboard for authenticated users
        } else {
          const errorMessage = await response.text();
          setError(errorMessage);
        }
      } catch (error) {
        console.error('Error during sign in:', error);
        setError('An error occurred during sign in. Please try again later.');
      }
    };

    const redirectToDashboard = () => {
      // Function to determine and redirect user based on role
      const token = localStorage.getItem('token');
      console.log(token);
      if (token) {
        const userRole = JSON.parse(atob(token.split('.')[1])).role;
        console.log(userRole);
        switch (userRole) {
          case 'TEACHER':
            navigate('/teacher');
            break;
          case 'STUDENT':
            navigate('/student');
            break;
          case 'ADMIN':
            navigate('/admin');
            break;
          default:
            // Handle default redirection if role is not recognized
            navigate('/login');
            break;
        }
      } else {
        // Redirect to login if token is not found
        navigate('/login');
      }
    };


    return(
        <MDBContainer className="my-5">
            <MDBRow className="p-5 mb-5 login-container">
                <MDBCol md="6" className="loginBanner-container theme-grid-col">
                    <h1>Hello!</h1>
                    <div className="banner">
                        <img src="https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg?w=740&t=st=1705029569~exp=1705030169~hmac=ba1b8d5996d7d92124208f6c3c1a4b02c4f37bf18215bca236ec15614891be85" alt="placeholder" />
                    </div>
                </MDBCol>

                <MDBCol md="6" className="login-content pd-5 theme-grid-col">
                    <MDBCardBody>
                        <MDBCardTitle tag="h2">Log In To SmartLearn Portal Here!</MDBCardTitle>
                        <MDBCardText className="text-content">
                            <div className="loginForm-Container mt-4">
                                <form onSubmit={handleSignIn}>
                                    {error && <div className="error">{error}</div>}
                                    <MDBInput label="Email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required /><br/>
                                    <MDBInput label="Password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required /><br/>
                                    <MDBBtn type="submit" color="primary">Sign In</MDBBtn>
                                </form>
                            </div>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
  );
}

export default Banner;