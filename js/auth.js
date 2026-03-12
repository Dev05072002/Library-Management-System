function adminLogin() {

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if (username === "admin" && password === "admin") {

alert("Admin Login Successful");

window.location.href = "admin-dashboard.html";

} else {

alert("Invalid Admin Credentials");

}

}



function userLogin() {

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if (username === "user" && password === "1234") {

alert("User Login Successful");

window.location.href = "user-dashboard.html";

} else {

alert("Invalid User Credentials");

}

}