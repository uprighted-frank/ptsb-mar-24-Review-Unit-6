function init() {
    const loginForm = document.getElementById("loginForm");

    // submit event for login form
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Gather username and password from input fields
        const username = e.target.username.value;
        const password = e.target.password.value;

        console.log(username);
        console.log(password);

        // Construct body object using information from input fields. This is to send to our routes on the server side
        const bodyObj = {
            username: username,
            password: password
        }

        // Make a POST request using the route and body.
        const request = await fetch("http://localhost:3000/users/login", {
            method: "POST",
            body: JSON.stringify(bodyObj),
            headers: {
                "Content-Type": "application/json"
            }
        });

        // Receive response from request
        const response = await request.json();

        console.log(response);
        // If loggedIn property is trutthy, we can save the username in localStorage and redirect to home.html page
        if (response.loggedIn) {
            localStorage.setItem("loggedInUser", response.username)
            location.href = "/public/pages/home.html";
        }

    })
}

init();