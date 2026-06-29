document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault();

let username=document.getElementById("username").value;
let password=document.getElementById("password").value;

if(username==="admin" && password==="12345"){

document.getElementById("message").style.color="lightgreen";
document.getElementById("message").innerHTML="Login Successful ✅";

setTimeout(function(){

window.location.href="https://www.google.com";

},1500);

}

else{

document.getElementById("message").style.color="red";
document.getElementById("message").innerHTML="Invalid Username or Password";

}

});