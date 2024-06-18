import { Link, Outlet } from 'react-router-dom';

export default function Header() {

    // I WILL NEED TO REWORK THIS. Just displaying the navbar links
    return (
        <>
                    <nav>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </nav>



            <Outlet />
        </>
    )
}