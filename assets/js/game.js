function welcomeUser() {
    let name = document.getElementById("username").value;
    let welcomeMessage =`<p>   
     Hello ${name} ! Let's test your knowledge of Star Wars.
     </p>`
    document.getElementById("username-box").innerHTML = welcomeMessage;
}

document.getElementById("username").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        welcomeUser();
    }
});

function playgame()

function keepscore()



   


    






