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




document.addEventListener("DOMContentLoaded", function() {
    runQuiz();
});

function runQuiz(){
    let questionsAndAnswer=[
        {
            question: "What is the name of the protagonist in the original Star Wars trilogy?",
            choices: ["Luke Skywalker", "Han Solo", "Darth Vader", "Princess Leia"],
            correctAnswer: 0
        },
        {
            question: "Which planet is home to Chewbacca, the Wookiee?",
            choices: ["Hoth", "Tatooine", "Endor", "Kashyyyk"],
            correctAnswer: 3
        },
        {
            question: "Who is the master Jedi that trained Obi-Wan Kenobi?",
            choices: ["Qui-Gon Jinn", "Yoda", "Mace Windu", "Count Dooku"],
            correctAnswer: 0
        },
        {
            question: "What is the primary weapon used by Jedi Knights?",
            choices: ["Lightsaber", "Blaster", "Bowcaster", "Vibroblade"],
            correctAnswer: 0
        },
        {
            question: "Which famous smuggler is the captain of the Millennium Falcon?",
            choices: ["Lando Calrissian", "Poe Dameron", "Jabba the Hutt", "Han Solo"],
            correctAnswer: 3
        },
        {
            question: "Who is Darth Vader's Sith apprentice in 'Star Wars: Episode III - Revenge of the Sith'?",
            choices: ["Darth Maul", "Darth Sidious", "Darth Tyranus", "Darth Vader himself"],
            correctAnswer: 2
        }
    ];
    let questionAsked = document.getElementById("question");
    let answers=document.getElementsByTagName("li");
    let possibleAnswer = questionsAndAnswer[0].choices
    let correctAnswer = questionsAndAnswer[0].correctAnswer
    let currentQuestion = 0;
    
    

    if (currentQuestion == 0){
        questionAsked.textContent = questionsAndAnswer[0].question
        for (let i = 0; i <= possibleAnswer.length; i++){
            answers[i].textContent = possibleAnswer[i]
            answers[i].onclick = function(){
                if (i === correctAnswer ){
                    alert(`you got it right ${possibleAnswer[i]} was correct maybe you will make a jedi after all`)
                    currentQuestion ++
                    // also have score incremtation here
                }else{
                    alert("Im sorry thats not the right answer are you turning to the dark side")
                    // and negative here
                }
            }
        }
    }
}
