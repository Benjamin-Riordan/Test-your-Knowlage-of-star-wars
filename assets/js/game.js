function getUserName() {
    var username = document.getElementById("username").value;
    var welcomeMessage = "Welcome " + username + "! How well do you know Star Wars? Let's find out.";
    document.getElementById("username").innerHTML = welcomeMessage;
}