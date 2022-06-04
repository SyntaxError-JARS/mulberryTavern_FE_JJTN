import { Link, Outlet } from 'react-router-dom';

export default function AdminMain() {
    return(
        <>
            <h1>Admin Control Panel</h1>
  
            <nav>
                <Link to="admin-login">Login</Link>
                --
                <Link to="update-menu">Add or Update Menu Item</Link>
                --
                <Link to="delete-menu">Delete Menu Item</Link>
                --
                <Link to="admin-logout">Logout</Link>
            </nav>
  
            <Outlet />
        </>
    )
}

