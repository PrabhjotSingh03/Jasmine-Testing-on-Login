window.onload = function () {
    "use strict";
    const output = document.getElementById("output__text");
    const form = document.getElementById("login_form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    // onSubmit function to get values from the form
    function onSubmit(form) {
        "use strict";
        form.preventDefault(); 
        //get username and password values
        const username = usernameInput.value;
        const password = passwordInput.value;

        //pass username and password as parameters to checkLogin function
        const loginResult = checkLogin(username, password);

        //output
        if (loginResult === true) {
            output.innerHTML = "Welcome back!";
        } 
        else if (loginResult === "Please enter a username.") 
        {
            output.innerHTML = "Please enter a username.";
        } 
        else if (loginResult === "Please enter a password.") 
        {
            output.innerHTML = "Please enter a password.";
        } 
        else if (loginResult === "Invalid Username or Password.") 
        {
            output.innerHTML = "Invalid Username or Password.";
        }
    }

    form.addEventListener("submit", onSubmit);//event listeners
};