import { Link } from "react-router-dom";

export default function NavBar() {
    return(
    <nav>
        <Link to = ""><button>Home</button></Link>
        <span>     </span>
        <Link to = "/cust-main"><button>Customer</button></Link>
        <span>     </span>
        <Link to = "/admin-main"><button>Admin</button></Link>
    </nav>
    )
}