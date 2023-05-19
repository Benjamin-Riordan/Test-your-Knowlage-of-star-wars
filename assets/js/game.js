let questionsAndAnswer = [
    // Level 1
    [
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
        correctAnswer: 1
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
      }
    ],
    // Level 2
    [
      {
        question: "Who is Darth Vader's Sith apprentice in 'Star Wars: Episode III - Revenge of the Sith'?",
        choices: ["Darth Maul", "Darth Sidious", "Darth Tyranus", "Darth Vader himself"],
        correctAnswer: 2
      },
      {
        question: "What is the name of the desert planet where Anakin Skywalker was discovered?",
        choices: ["Hoth", "Tatooine", "Endor", "Kashyyyk"],
        correctAnswer: 1
      },
      {
        question: "Which character famously said, 'I've got a bad feeling about this'?",
        choices: ["Han Solo", "Luke Skywalker", "Princess Leia", "Obi-Wan Kenobi"],
        correctAnswer: 0
      },
      {
        question: "What is the name of the bounty hunter who captures Han Solo in 'The Empire Strikes Back'?",
        choices: ["Boba Fett", "Jango Fett", "IG-88", "Dengar"],
        correctAnswer: 0
      },
      {
        question: "Who is Luke Skywalker's twin sister?",
        choices: ["Rey", "Padmé Amidala", "Leia Organa", "Ahsoka Tano"],
        correctAnswer: 2
      }
    ],
    // Level 3
    [
      {
        question: "Who is the Sith Lord ruling the Galactic Empire in the original Star Wars trilogy?",
        choices: ["Darth Vader", "Darth Sidious", "Darth Maul", "Darth Tyranus"],
        correctAnswer: 1
      },
      {
        question: "What is the name of Han Solo's ship?",
        choices: ["X-wing", "TIE Fighter", "Star Destroyer", "Millennium Falcon"],
        correctAnswer: 3
      },
      {
        question: "Which planet is destroyed by the Death Star in 'A New Hope'?",
        choices: ["Alderaan", "Naboo", "Coruscant", "Kamino"],
        correctAnswer: 0
      },
      {
        question: "Who is the leader of the Rebel Alliance?",
        choices: ["Mon Mothma", "Admiral Ackbar", "General Leia Organa", "Luke Skywalker"],
        correctAnswer: 0
      },
      {
        question: "What is the name of the Imperial walker vehicles used by the Empire?",
        choices: ["AT-AT", "AT-ST", "AT-RT", "AT-TE"],
        correctAnswer: 0
      }
    ],
    // Level 4
    [
      {
        question: "Who is the actor that portrays Han Solo in the Star Wars films?",
        choices: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Anthony Daniels"],
        correctAnswer: 1
      },
      {
        question: "What is the name of the Sith Lord who killed Qui-Gon Jinn in 'The Phantom Menace'?",
        choices: ["Darth Vader", "Darth Sidious", "Darth Maul", "Darth Tyranus"],
        correctAnswer: 2
      },
      {
        question: "Which bounty hunter in 'The Empire Strikes Back' is disguised as a protocol droid?",
        choices: ["Bossk", "Zuckuss", "IG-88", "4-LOM"],
        correctAnswer: 3
      },
      {
        question: "Who is the pilot of the Millennium Falcon in 'The Force Awakens'?",
        choices: ["Lando Calrissian", "Poe Dameron", "Chewbacca", "Kylo Ren"],
        correctAnswer: 1
      },
      {
        question: "Which color lightsaber does Mace Windu wield?",
        choices: ["Blue", "Green", "Red", "Purple"],
        correctAnswer: 3
      }
    ],
    // Level 5
    [
      {
        question: "What is the name of the Jedi master who discovered Anakin Skywalker?",
        choices: ["Qui-Gon Jinn", "Obi-Wan Kenobi", "Yoda", "Mace Windu"],
        correctAnswer: 0
      },
      {
        question: "Which actor portrays Luke Skywalker in the Star Wars films?",
        choices: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Billy Dee Williams"],
        correctAnswer: 0
      },
      {
        question: "What is the name of the Sith Lord who killed Qui-Gon Jinn in 'The Phantom Menace'?",
        choices: ["Darth Vader", "Darth Sidious", "Darth Maul", "Darth Tyranus"],
        correctAnswer: 2
      },
      {
        question: "Who is the pilot of the Millennium Falcon in 'The Force Awakens'?",
        choices: ["Lando Calrissian", "Poe Dameron", "Chewbacca", "Kylo Ren"],
        correctAnswer: 1
      },
      {
        question: "Which color lightsaber does Mace Windu wield?",
        choices: ["Blue", "Green", "Red", "Purple"],
        correctAnswer: 3
      }
    ]
  ];
/** This is the first function that will grab the usersname
 * and reprint the name insde a welcome message.
 * it will also check if the user entered a value or not 
*/

// name of the fuction
function welcomeUser() {
    /**identifiying where the js code will get the name from 
     * so name cannot be chnaged
     * document is the whole document.
     * getelementbyid of username ..in my html i have an input it has and id of username
     * . value beacuse its an input feild in needs to read the value */ 
    const name = document.getElementById("username").value;
    // checks if the user enters a name or not 
    if(name === ""){
        // if the user doesnt enter a name it alerets and re-runs the code through and open retunn
        alert("please enter a username")
        return;
    }
    /** welcome message is just the message to be diplayed when the user does enter a name
     * using temlate litertals i have inserted name from above inside the weclome messsgae
     */
    let welcomeMessage =`<p>   
     Hello ${name} ! Let's test your knowledge of Star Wars.
     </p>`; 
     // this line tells the js that this specicfic section is where welcome message will go 
    document.getElementById("username-box").innerHTML = welcomeMessage;
}
/**
 * the next event to happen if it happens id for the user to enter a name and use the enter key to activate this code 
 * i may chnage this to a on-mouse leave event but i will get feenabk first 
 * this if event wil trigger when the user hits enter and then welcome user will run 
 */
document.getElementById("username").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        welcomeUser();
    } 
});

function levelSelect() {
    let buttons = document.getElementsByClassName("Level-selc");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            if (buttons[i].innerHTML == "Level 1") {
                alert("level 1 selected The quiz will now start");
                currentLevel = 0
                displayQuestion()
            } else if (buttons[i].innerHTML == "Level 2") {
                alert("level 2 selected The quiz will now start")
                currentLevel = 1
                displayQuestion()
            } else if (buttons[i].innerHTML == "Level 3") {
                alert("level 3 selected The quiz will now start")
                currentLevel = 2
                displayQuestion()
            } else if (buttons[i].innerHTML == "Level 4") {
                alert("level 4 selected The quiz will now start")
                currentLevel = 3
                displayQuestion()
            } else if (buttons[i].innerHTML == "Level 5") {
                alert("level 5 selected The quiz will now start")
                currentLevel = 4
                displayQuestion()
            } else {
                alert("You need to pick a level");
                return;
            }
        };
    }
} 

document.addEventListener("DOMContentLoaded", function() {
    levelSelect()
});
let currentLevel = 0
let correctScore = 0
let wrongScore = 0

function updateScores(){
    document.getElementById("Cscore").textContent = correctScore;
    document.getElementById("NCscore").textContent = wrongScore;
}
function displayQuestion(){
    let questionAsked = document.getElementById("question");
    let answers=document.getElementsByTagName("li");
    let currentQuestion = 0;

    
        if (currentQuestion < questionsAndAnswer[currentLevel][currentQuestion].length){
        let possibleAnswer = questionsAndAnswer[currentLevel][currentQuestion].choices
        let correctAnswer = questionsAndAnswer[currentLevel][currentQuestion].correctAnswer
        questionAsked.textContent = questionsAndAnswer[currentLevel][currentQuestion].question
        for (let i = 0; i < possibleAnswer.length; i++){
            answers[i].innerHTML =`<input type=radio>   ${possibleAnswer[i]}`
            answers[i].onclick = function(){
                if (i === correctAnswer ){
                    alert(`you got it right ${possibleAnswer[i]} was correct maybe you will make a jedi after all`)
                    currentQuestion ++
                    correctScore ++
                    updateScores()
                    displayQuestion()
                    // also have score incremtation here
                }else{
                    alert("Im sorry thats not the right answer are you turning to the dark side")
                    wrongScore ++
                    updateScores()
                }
            };
        }
        }else {
            alert("End of Quiz");
        }
    }
     displayQuestion()
}

