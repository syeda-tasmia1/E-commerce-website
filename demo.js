var userArray = [];

var notexistEmail;

function addUser() {

    var username1 = document.querySelector('#inputusername1').value;
    if (username1 == "" || username1 == undefined) {
        alert("Username must be filled out");
        return false;
    }
    var email4 = document.querySelector('#inputEmail4').value;
    if (email4 == "" || email4 == undefined) {
        alert("email must be filled out");
        return false;
    }
    var password4 = document.querySelector('#inputPassword4').value;
    if (password4 == "" || password4 == undefined) {
        alert("password must be filled out");
        return false;
    }
    if (password4.length < 4 || password4.length == undefined) {
        alert("password is weak try stronger password");
        return false;
    }
    var re_psw = document.querySelector('#inputre_psw').value;
    if (re_psw == "" || re_psw == undefined) {
        alert("Re-password must be filled out");
        return false;
    }

    if (email4 != "" || email4 == undefined) {
        var x = email4;
        var atposition = x.indexOf("@");
        var dotposition = x.lastIndexOf(".");
        if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
            alert("Please enter a valid e-mail address");
            return false;
        }
    }

    var user = {
        userName1: document.getElementById("username1").value,
        email4: document.getElementById("email4").value,
        password4: document.getElementById("password4").value,
        password2: document.getElementById("password2").value,
    };

    var data = (JSON.parse(localStorage.getItem("user")));
    if (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].email == user.email) {
                notexistEmail = data[i].email;
            }
        }
    }
}



function validateForm() {

    var email1 = document.querySelector('#inputEmail4').value;
    if (email1 == "" || email1 == undefined) {
        alert("Name must be filled out");
        return false;
    }
    var password1 = document.querySelector('#inputPassword4').value;
    if (password1 == "" || password1 == undefined) {
        alert("password must be filled out");
        return false;
    }

    var user = {
        email1: document.getElementById("email1").value,
        password1: document.getElementById("password1").value,
    };

   }