/**
 The checkLogin function accepts username and password values entered by the user 
 It encrypts using md5Encrypt function
 It encrypts values entered by the user and matches it with hard coded encrypted values 
 The function returns boolean true if the values match and specified error messages if they do not
 */
function checkLogin(username, password) {
    //encrypt the username and password entered by the user
    const md5Username = md5Encrypt(username);
    const md5Password = md5Encrypt(password);

    const correctUsername = md5Encrypt("prabh");
    const correctPassword = md5Encrypt("pass12345");

    //logic
    if (md5Username === correctUsername && md5Password === correctPassword) {
        return true;
    } 

    else if (username === "") {
        return "Please enter a username.";
    } 

    else if (password === "") {
        return "Please enter a password.";
    }

    else if (md5Username !== correctUsername || md5Password !== correctPassword) 
    {
        return "Invalid Username or Password.";
    }
}
