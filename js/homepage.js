
// form validation 
let btnregister = document.getElementsByTagName('input')[5];
let btnlogin = document.getElementsByTagName('input')[8]
//select input feilds
var fname = document.getElementsByTagName('input')[0];
var lname = document.getElementsByTagName('input')[1];
var address = document.getElementsByTagName('input')[2];
var email = document.getElementsByTagName('input')[3];
var age = document.getElementsByTagName('input')[4];
//select div validation
var fnamediv = document.querySelector('.fnamediv');
var lnamediv = document.querySelector('.lnamediv');
var addressdiv = document.querySelector('.addressdiv');
var emaildiv = document.querySelector('.emaildiv');
var agediv = document.querySelector('.agediv');

fname.focus();
fname.addEventListener("blur", function () {
    if (!(isFnameValid())) {
        fnamediv.style.display = "block"
        fnamediv.classList.add('invalid-feedback')  // classlist 
        fname.classList.add('errorstyle')
        fname.focus();
    }
    else {
        fnamediv.style.display = "none";
        fnamediv.classList.remove("invalid-feedback");
        fname.classList.remove('errorstyle')
    }
});

lname.addEventListener("blur", function () {
    if (!(isLnameValid())) {
        lnamediv.style.display = "block";
        lnamediv.classList.add("invalid-feedback");
        lname.classList.add('errorstyle')
        lname.focus();
    }
    else {
        lnamediv.style.display = "none";
        lnamediv.classList.remove("invalid-feedback");
        lname.classList.remove('errorstyle')
    }
});
address.addEventListener("blur", function () {
    if (!(isAddressValid())) {
        addressdiv.style.display = "block";
        addressdiv.classList.add("invalid-feedback");
        address.classList.add('errorstyle')
        address.focus();
    }
    else {
        addressdiv.style.display = "none";
        addressdiv.classList.remove("invalid-feedback");
        address.classList.remove('errorstyle')
    }
});
//add event on email input
email.addEventListener("blur", function (e) {
    // console.log(e);
    if (!(isEmailValid())) {
        emaildiv.style.display = "block";
        emaildiv.classList.add("invalid-feedback");
        email.classList.add('errorstyle')
        email.focus();
    }
    else {
        emaildiv.style.display = "none";
        emaildiv.classList.remove("invalid-feedback");
        email.classList.remove('errorstyle')
    }
});
age.addEventListener("blur", function () {
    if (!(isAgeValid())) {
        agediv.style.display = "block";
        agediv.classList.add("invalid-feedback");
        age.classList.add('errorstyle')
        age.focus();
    }
    else {
        agediv.style.display = "none";
        agediv.classList.remove("invalid-feedback");
        age.classList.remove('errorstyle')
    }
});

function isFnameValid() {

   fname.addEventListener('keydown',function(data){
       console.log(data.keyCode)
       if(data.keyCode >= 48 && data.keyCode <= 57)
       {
           data.preventDefault();
       }
   })
   
   return fname.value.length > 2; ;
}
function isLnameValid() {

    lname.addEventListener('keydown',function(data){
        if(data.keyCode >= 48 && data.keyCode <= 57)
        {
            data.preventDefault();
        }
    })
    return lname.value.length > 2;
}
function isAddressValid() {
    return address.value.length > 6;
}

function isEmailValid() {
    var emailExpr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return email.value.match(emailExpr);
}
function isAgeValid() {
    age.addEventListener('keydown',function(data){
        if(data.keyCode >= 65 && data.keyCode <= 90)
        {
            data.preventDefault();
        }
    })
    return (age.value > 20 && age.value < 60);
}

//select login 
let logindiv = document.querySelector('.login');
logindiv.addEventListener("click", function () {
    this.classList.add('border-bottom')
    document.forms[1].style.display = "block";
    document.forms[0].style.display = "none";
    registerdiv.classList.remove('border-bottom')
})
//select register
let registerdiv = document.querySelector('.register');
registerdiv.addEventListener("click", function () {
    this.classList.add('border-bottom')
    document.forms[0].style.display = "block";
    document.forms[1].style.display = "none";
    logindiv.classList.remove('border-bottom')

})

///form Registration 
btnregister.addEventListener("click", function (e) {
    e.preventDefault();
    var emp = {
        firstName: fname.value,
        lastName: lname.value,
        address: address.value,
        email: email.value,
        age: age.value,
        username: fname.value + Math.floor(Math.random() * 1000),
        Password: Math.random().toString(16).substr(2, 8)
    }
    async function postData() {

        await fetch(`http://localhost:3000/data`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(emp),
        });
    }
    postData();

    /////////////****************************************** */
    function sendemail() {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "emangomaa149@gmail.com",
            Password: "8491C3B8FA7A76E167760F81E3FDE5F4DE6B",
            To: `${emp.email}`,
            From: "emangomaa149@gmail.com",
            Subject: "login with your username and password",
            Body: `username : ${emp.username} , password : ${Math.random().toString(16).substr(2, 8)}`,
        })
            .then(function (message) {
                alert(message);
            });
    }
    sendemail();
    // document.forms[0].reset();
    document.forms[1].style.display = "block";
    document.forms[0].style.display = "none";

});//end of submit


//***************/ save admin username and password in local storage*********/////
let usernamekey = "adminusername"
let usernamevalue = "owner";
let passwordkey = "adminpassword";
let passwordvalue = "owner11"

localStorage.setItem(usernamekey, usernamevalue);
localStorage.setItem(passwordkey, passwordvalue);

// console.log(localStorage.getItem(usernamekey));
// console.log(localStorage.getItem(passwordkey));

//******************login******************//
let userfeild = document.getElementsByTagName('input')[6];
let passfeild = document.getElementsByTagName('input')[7];

let uservalue = userfeild.value;
let passvalue = passfeild.value;

let usernamediv = document.getElementById('usernamediv');
let passworddiv = document.getElementById('passworddiv');

userfeild.focus();

userfeild.addEventListener('blur',function(){
    if (uservalue != localStorage.getItem(usernamekey))
    {
        getalldata();
    }
})
btnlogin.addEventListener("click", function (e) {
    e.preventDefault();
    let uservalue = userfeild.value;
    let passvalue = passfeild.value;

    if (uservalue == localStorage.getItem(usernamekey)) {
        if (passvalue == localStorage.getItem(passwordkey)) {
            window.location.href = "adminprofilepage.html";
        }
        else {
            passworddiv.style.display = "block";
            passworddiv.classList.add("invalid-feedback");
            passfeild.classList.add('errorstyle')
            passfeild.focus();
        }
    }
    else {
        getalldata();
        document.forms[1].reset();
    }


    async function getalldata() {
        let alldatajson = await fetch("http://localhost:3000/data");
        let alldata = await alldatajson.json();
        // console.log(alldatajson);
        // console.log(alldata);
        alldata.forEach((data) => {
            if (uservalue == data.username) {
                if (passvalue == data.Password)
                    window.location.href = "profile.html";
                else {
                    passworddiv.style.display = "block";
                    passworddiv.classList.add("invalid-feedback");
                    passfeild.classList.add('errorstyle')
                    passfeild.focus();
                }
                usernamediv.style.display = "block";
                usernamediv.classList.add("invalid-feedback");
                userfeild.classList.add('errorstyle')
                userfeild.focus();
            }
        })
    }


})
