import { useNavigate  } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        const body = {
            username: username,
            password: password
        }

        const response = await fetch("http://localhost:3000/users/register", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': "application/json"
            }
        });

        const data = await response.json();
        navigate("/login");

    }

    return (
        <div className="registerForm">
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" id="username" placeholder="Username"/>
                <input type="password" name="password" id="password" placeholder="Password" />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}