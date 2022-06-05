import { Link, Outlet } from 'react-router-dom';

export default function CustMain() {
    return(
        <>
            <h1>Customer Dashboard</h1>
  
            <nav>
                
                <Link to="view-menu">View Menu</Link>
                --
                <Link to="cust-register">Register</Link>
                --
                <Link to="cust-login">Login</Link>
                --
                <Link to="add-order">Order</Link>
                --
                <Link to="add-cc">Add Credit Card</Link>
                --
                <Link to="cust-logout">Logout</Link>
                
            </nav>
  
            <Outlet />
        </>
    )
}