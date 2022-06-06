
import { useState, useEffect } from "react";

export default function ViewMenu() {
    
    const [menuBody, setMenuBody] = useState([]);

    useEffect(() => {
        display();
    }, []);

    async function display() {
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
            <h3>Here is the menu</h3>
            
            
            <div class="container">
                <table>
                    <tbody>{menuBody}</tbody>
                </table>
            </div>
            
        </>
    )
}