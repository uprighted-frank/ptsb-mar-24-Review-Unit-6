function init() {
    // Get loggedInUser from localStorage.
    const loggedInUser = localStorage.getItem("loggedInUser");

    // Using DOM manipulation, change the element of id's innerText to the value within localStorage
    const usernameSpan = document.getElementById("username");
    usernameSpan.innerText = loggedInUser;
}

init();