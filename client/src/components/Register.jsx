

export default function Register() {

    async function handleSubmit(e) {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        const body = {
            username: username,
            password: password
        }

        console.log(username);
        console.log(password);

        const response = await fetch("http://localhost:3000/users/register", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': "application/json"
            }
        });

        const data = await response.json();
        console.log(data);
        
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