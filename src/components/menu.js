import { useState } from "react";

export default function Menu() {
    
    const [menuBody, setMenuBody] = useState([]);

    async function viewMenu() {
        try {
            const response = await fetch("http://localhost:8080/mulberry/menu");
            const menu = await response.json();
            const menuRows = menu.map((e) => {
                return (
                    <tr>
                        <td>{e.item_name}</td>
                        <td>{e.cost}</td>
                    </tr>
                );
            });
            console.log(menu);
            setMenuBody(menuRows);
        } catch (e) {
            console.error(e);

        }
    }
    return (
        <>
            <h1>Here is the menu</h1>
            
            <button onClick={viewMenu}>GET</button>
            
            <div class="container">
                <h2></h2>
            </div>
            
            <div class="container">
                <table>
                    <tbody>{menuBody}</tbody>
                </table>
            </div>
            
        </>
    )
}
