// Create a function to get the authorization header config
export default function getAuthHeaderConfig () {
    const token = localStorage.getItem('token');
    console.log(token);
    return {
        headers: {
            Authorization: `Bearer ${token}`
            
        }
    };
};

