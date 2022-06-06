import axios from "axios";
import { useRef } from "react";

export default function CustOptions() {
    
    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();
    const input5 = useRef();
    const input6 = useRef();
    const input7 = useRef();
    const input8 = useRef();
    const input9 = useRef();

    // async-await
    async function addorder() {
        // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
        // error due to the refInput.current = undefined, meaning there is no .value available
        const orderitem = {
            menu_item: input1.current.value,
            comment: input2.current.value,
            is_favorite: input3.current.value,
            order_date: input4.current.value
        };

        try {
            const response = await axios.post("http://localhost:8080/mulberry/order", orderitem);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    async function addcc() {
        // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
        // error due to the refInput.current = undefined, meaning there is no .value available
        const newcc = {
            cc_number: input5.current.value,
            cc_name: input6.current.value,
            cvv: input7.current.value,
            exp_date: input8.current.value,
            zip: input9.current.value
        };

        try {
            const response = await axios.post("http://localhost:8080/mulberry/cc", newcc);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    async function logout() {
        try {
            const response = await axios.delete("http://localhost:8080/mulberry/login");
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }

    }

    return (
        <>
            <h3>Customer Dashboard</h3>
            <h4>Order an item</h4>
            <input placeholder="Item name" ref={input1}></input>
            <input placeholder="Comment" ref={input2}></input>
            <input placeholder="Favorite?" ref={input3}></input>
            <input placeholder="Date" ref={input4}></input>
            <button onClick={addorder}>POST</button>
            <h4>Add credit card</h4>
            <input placeholder="Credit Card Number" ref={input5}></input>
            <input placeholder="Name on card" ref={input6}></input>
            <input placeholder="CVV" ref={input7}></input>
            <input placeholder="Expiry Date" ref={input8}></input>
            <input placeholder="Zip code" ref={input9}></input>
            <button onClick={addcc}>POST</button>
            <h4>Logout</h4>
            <button onClick={logout}>DELETE</button>
        </>
    );
}