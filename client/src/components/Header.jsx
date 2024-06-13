import { Link, Outlet } from 'react-router-dom';

export default function Header() {

    return (
        <>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/logout">Logout</Link>
            </nav>

            <Outlet />
        </>
    )
}