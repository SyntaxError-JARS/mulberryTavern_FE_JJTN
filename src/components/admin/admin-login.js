import axios from "axios";
import { useContext, useRef } from "react";
import { userContext } from "../../App";

export default function Admin() {
    const unameInput = useRef();
    const pwInput = useRef();
    const [user, setUser] = useContext(userContext);
    
    async function login() {
        // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
        // error due to the refInput.current = undefined, meaning there is no .value available
        const admin = {
            username: unameInput.current.value,
            password: pwInput.current.value,
        };

        try {
            const response = await axios.post(`http://localhost:8080/mulberry/admin`, admin);
            console.log(response.data);
            setUser({ ...user, uname: admin.username });
            console.log("This is after we set the user ", user);
            } 
        catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
        
    }

    return (
        <>
            <h4>Welcome back, please log in below.</h4>
            <input placeholder="Enter username" ref={unameInput}></input>
            <input type="password" placeholder="Enter password" ref={pwInput}></input>
            <button onClick={login}>Login -POST-</button>
        </>
    )
}