import { useNavigate } from "react-router-dom";
import "../styles/Login.css"

export default function Login({ handlerLogin }) {
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        const body = {
            username: username,
            password: password
        }

        const response = await fetch("http://localhost:3000/users/login", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': "application/json"
            }
        });

        const data = await response.json();

        if (data.loggedIn) {
            localStorage.setItem("username", data.username);
            localStorage.setItem("token", data.token);
            handlerLogin(true);

            navigate("/shop");
        } 
        console.log(data);
    }

    return (
        <div className="loginForm">
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" id="username" placeholder="Username"/>
                <input type="password" name="password" id="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}