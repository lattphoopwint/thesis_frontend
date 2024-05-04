import { useState, useEffect } from "react";

export function LoginPage(){
    const [backendResp, setBackendResp] = useState("Nothing");

    useEffect(() => {
        const api = async() => {
            const data = await fetch("http://localhost:8080/api/v1/auth/hello");
            const jsonData = await data.json();
            setBackendResp(jsonData["content"]);
        }
        api();
    })

    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default LoginPage;