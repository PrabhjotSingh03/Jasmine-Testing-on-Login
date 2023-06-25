describe("checkMd5Encrypt", function () {
    it("should return a 32 hexadecimal string", function () {
        var password = "pass12345";
        var result = md5Encrypt(password);

        // Ensure the result matches the regular expression for a 32 hexadecimal string
        var hexRegex = /^[0-9a-fA-F]{32}$/;
        expect(result).toMatch(hexRegex);
    });
});//End of checkMd5Encrypt function

describe("checkLogin", function() {

    describe("checkLogin Test for pass", function(){
        it("should return true for a valid username and matching password", function() {
        expect(checkLogin("prabh", "pass12345")).toEqual(true);
        });
    });//end of test to pass

    describe("checkLogin Test for fail", function(){
        it("should return 'Invalid Username or Password.' for an invalid username", function() {
            expect(checkLogin("sean", "pass12345")).toEqual("Invalid Username or Password.");
        });
  
        it("should return 'Invalid Username or Password.' for an invalid password", function() {
            expect(checkLogin("prabh", "pass")).toEqual("Invalid Username or Password.");
        });
  
        it("should return 'Invalid Username or Password.' for an invalid username and password combination", function() {
            expect(checkLogin("sean", "pass")).toEqual("Invalid Username or Password.");
        });
  
        it("should return 'Please enter a username.' if the username is empty", function() {
            expect(checkLogin("", "pass12345")).toEqual("Please enter a username.");
        });

        it("should return 'Please enter a password.' if the password is empty", function() {
            expect(checkLogin("prabh", "")).toEqual("Please enter a password.");
        });

    });//end of test to fail
});//End Main Suite