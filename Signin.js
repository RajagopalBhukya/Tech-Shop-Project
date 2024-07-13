document.getElementById("signUpButton").addEventListener('click', function(){


    let username = document.getElementById("Username").value;
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;
    let confirmPassword = document.getElementById("ConfirmPassword").value;

    localStorage.setItem("name", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password",  password);

    if(!username || !email || !password || !confirmPassword){
        alert("Fill all the details");
        return;
    }
    else if(password !== confirmPassword){
        alert("password Doesn't match");
        return;
    }
    else{
        alert(`${username} Registered Successfully`);
    }

    document.getElementById("signupContainer").style.display ="none";
    document.getElementById("loginContainer").style.display ="block"

});


document.getElementById("loginButton").addEventListener("click",function loginbtn(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("cpassword").value;

    let storedemail = localStorage.getItem("email");
    let storedpassword = localStorage.getItem("password");


    if(!email || !password){
        alert("Please enter both email and password");
        return;
    }
    else if(email !== storedemail || password !== storedpassword){
        alert("Email or Password is incorrect");
        return;
    }
    else{
        window.location.href="./index.html";        

    }
});

document.getElementById("showlogin").addEventListener("click",function(){
    document.getElementById("signupContainer").style.display = "none";
    document.getElementById("loginContainer").style.display = "block";
})
document.getElementById("showSignup").addEventListener("click",function(){
    document.getElementById("signupContainer").style.display = "block";
    document.getElementById("loginContainer").style.display = "none";
})

