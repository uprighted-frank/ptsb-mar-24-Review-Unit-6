import { Link, Outlet } from 'react-router-dom';

export default function Header({ isLoggedIn }) {

    let welcomeBanner = null;
    
    if (isLoggedIn) {
        const username = localStorage.getItem("username")
        welcomeBanner = <h2>Welcome {username}</h2>
    }


    return (
        <>
            {
                !isLoggedIn ?
                    <nav>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </nav>
                
                    :

                    welcomeBanner
            }



            <Outlet />
        </>
    )
}