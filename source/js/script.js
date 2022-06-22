

loginCredentials = () => {


    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    console.log(email);
    console.log(password);


    if (validateEmail(email) == true) {
        if (email == "admin@sample.com" && password == "admin") {
            loginAlertCorrect(true)
        } else {
            loginAlertCorrect(false)
        }

        console.log("Done validate email")

        var a = document.getElementById("loginCredentialsEmailError");
        a.classList.add("d-none");

    } else {

        $('#invalidEmailLogin').modal('show');
    }
}



function loginAlertCorrect(result) {

    if (result == true) {

        console.log("Login Credential Correct")
        window.location.href = "./index.html";

    } else {

        $('#invalidCredentialLogin').modal('show');
    }
}



// \S+@\S no white space and 1 @ only
// \S+\.\S no white space and 1 . only
validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
