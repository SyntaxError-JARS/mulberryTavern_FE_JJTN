import axios from "axios";
import { useRef } from "react";

export default function SignUp() {
    
    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();


    // async-await
    async function register() {
        // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
        // error due to the refInput.current = undefined, meaning there is no .value available
        const newcust = {
            fname: input1.current.value,
            lname: input2.current.value,
            username: input3.current.value,
            password: input4.current.value,
            balance: 0,
            is_admin: false

        };

        try {
            const response = await axios.post("http://localhost:8080/mulberry/customer", newcust);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    return (
        <>
            <h4>Register here</h4>
            <input placeholder="First name" ref={input1}></input>
            <input placeholder="Last name" ref={input2}></input>
            <input placeholder="Username" ref={input3}></input>
            <input placeholder="Password" ref={input4}></input>
            <button onClick={register}>POST</button>
        </>
    );
}