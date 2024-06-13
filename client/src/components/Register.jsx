

export default function Register() {

    return (
        <div className="registerForm">
            <form>
                <input type="text" name="username" id="username" placeholder="Username"/>
                <input type="password" name="password" id="password" placeholder="Password" />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}