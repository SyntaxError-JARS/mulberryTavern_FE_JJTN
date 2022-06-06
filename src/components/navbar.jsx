import { Link } from "react-router-dom";

export default function NavBar() {
    
    return (
        <nav>
            <Link to="/">
                <button>Home Page</button>
            </Link>
            <span> </span>
            <Link to="/view-menu">
                <button>View Menu</button>
            </Link>
            <span> </span>
            <Link to="/sign-up">
                <button>Sign up</button>
            </Link>
            <span> </span>
            <Link to="/cust-login">
                <button>Customer Login</button>
            </Link>
            <span> </span>
            <Link to="/admin-login">
                <button>Admin Login</button>
            </Link>
        </nav>
    );
}