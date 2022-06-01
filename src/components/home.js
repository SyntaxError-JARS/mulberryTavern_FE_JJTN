import { Link } from "react-router-dom";

export default function Welcome() {
    return (
        <>
            <div><h1>Welcome to Mulberry Tavern</h1></div>
            <div>
                <Link to = "/menu"><button>View Our Menu</button></Link>
                <span>                           </span>
                <Link to = "/customer"><button>Order Online</button></Link>
            </div>
        </>
    )
}