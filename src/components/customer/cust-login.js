import axios from "axios";
import { useContext, useRef } from "react";
import { userContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function CustLogin() {
    const unameInput = useRef();
    const pwInput = useRef();
    const [user, setUser] = useContext(userContext);
    const navigate = useNavigate();
    
    async function login() {
        // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
        // error due to the refInput.current = undefined, meaning there is no .value available
        const cust = {
            username: unameInput.current.value,
            password: pwInput.current.value,
        };

        try {
            const response = await axios.post("http://localhost:8080/mulberry/login", cust);
            console.log(response.data);
            setUser({ ...user, uname: cust.username });
            console.log(user);
            navigate("/cust-options");
            } 
        catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
        
    }

    return (
        <>
            <h4>Registered customers can log in below.</h4>
            <input placeholder="Enter username" ref={unameInput}></input>
            <input type="password" placeholder="Enter password" ref={pwInput}></input>
            <button onClick={login}>Login -POST-</button>
        </>
    )
}