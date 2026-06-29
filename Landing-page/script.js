function login() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // Demo login credentials
    const validUsername = "salman";
    const validPassword = "web deveploment";

    if (username === "" || password === "") {
        alert("Please enter both Username and Password.");
        return;
    }

    if (username === validUsername && password === validPassword) {
        alert("✅ Login Successful! Welcome " + username);
        window.location.href = "#services";
    } else {
        alert("❌ Invalid Username or Password");
    }
}