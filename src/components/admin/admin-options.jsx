import axios from "axios";
import { useRef } from "react";
import { useContext } from "react";
import { userContext } from "../../App";

export default function AdminOptions() {

    const [user, setUser] = useContext(userContext);
    console.log(user);
    
    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();
    const input5 = useRef();

    // async-await
    async function updatemenu() {
        // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
        // error due to the refInput.current = undefined, meaning there is no .value available
        const menuitem = {
            item_name: input1.current.value,
            cost: input2.current.value,
            protein: input3.current.value,
            is_substitutable: input4.current.value
        };

        try {
            const response = await axios.put("http://localhost:8080/mulberry/menu", menuitem);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    async function deleteitem() {

        const menuitem = {item_name: input5.current.value}

        try {
            const response = await axios.delete("http://localhost:8080/mulberry/menu", menuitem);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }

    }

    async function logout() {
        try {
            const response = await axios.delete("http://localhost:8080/mulberry/admin");
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }

    }

    return (
        <>
            <h3>Admin Dashboard</h3>
            <h4>Add or edit a menu item</h4>
            <input placeholder="Item name" ref={input1}></input>
            <input placeholder="Cost" ref={input2}></input>
            <input placeholder="Protein" ref={input3}></input>
            <input placeholder="Substitutable" ref={input4}></input>
            <button onClick={updatemenu}>PUT</button>
            <h4>Delete a menu item</h4>
            <input placeholder="Item name" ref={input5}></input>
            <button onClick={deleteitem}>DELETE</button>
            <h4>Logout</h4>
            <button onClick={logout}>DELETE</button>

        </>
    );
}