import { Link } from "react-router-dom";

export default function NavBar() {
    return(
    <nav>
        <Link to = ""><button>Home</button></Link>
        <span>     </span>
        <Link to = "/customer"><button>Customer</button></Link>
        <span>     </span>
        <Link to = "/admin"><button>Admin</button></Link>
    </nav>
    )
}