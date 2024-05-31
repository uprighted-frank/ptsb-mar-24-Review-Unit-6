function init() {
    const loggedInUser = localStorage.getItem("loggedInUser");

    const usernameSpan = document.getElementById("username");
    usernameSpan.innerText = loggedInUser;
}

init();