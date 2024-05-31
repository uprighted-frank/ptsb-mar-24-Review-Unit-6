function init() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        console.log(username);
        console.log(password);

        const bodyObj = {
            username: username,
            password: password
        }

        const request = await fetch("http://localhost:3000/users/login", {
            method: "POST",
            body: JSON.stringify(bodyObj),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const response = await request.json();

        console.log(response);
        if (response.loggedIn) {
            localStorage.setItem("loggedInUser", response.username)
            location.href = "/public/pages/home.html";
        }

    })
}

init();