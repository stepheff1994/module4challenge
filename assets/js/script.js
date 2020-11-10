//variables
localStorage.setItem("high-scores", "{}")
var containQ = document.querySelector("#questions");
var startBtn = document.querySelector("#start-button");
var userScore = 0
var userA = ""
var interval;




let questions = [
  {
    question: "Commonly used data types do not include: ",
    answers: {
      1: "Numbers",
      2: "Boooleans",
      3: "Alerts",
      4: "Strings",
    },
    correct: "3",
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    answers: {
      1: "numbers and strings",
      2: "other arrays",
      3: "booleans",
      4: "all of the above",
    },
    correct: "4",
  },
  {
    question: "What is the best programming language?",
    answers: {
      1: "Purple",
      2: "Green",
      3: "Red",
      4: "Blue",
    },
    correct: "3",
  },
  {
    question: "When did the Titanic sink?",
    answers: {
      1: "Purple",
      2: "Green",
      3: "Red",
      4: "Blue",
    },
    correct: "4",
  },
  {
    question: "When did the first Star Wars come out?",
    answers: {
      1: "Purple",
      2: "Green",
      3: "Red",
      4: "Blue",
    },
    correct: "3",
  },
];

//quiz functions
// 4 label tags for each question
//

function buildQuestions() {
  let questionsString = "";

  for (let i = 0; i < questions.length; i++) {
    console.log(questions[i]);

    let qandaOpt = `<div class= "page">
    <div> ${questions[i].question}</div>
    <label>
        <input class= "radiobtn" type="radio" name="question${i + 1}" value="1">
        <p class="option">1: ${questions[i].answers["1"]}</p>

    </label>
    <label>
        <input class= "radiobtn" type="radio" name="question${i + 1}" value="2">
        <p class="option">2: ${questions[i].answers["2"]}</p>
	 </label>
    <label>
        <input class= "radiobtn" type="radio" name="question${i + 1}" value="3">
        <p class="option">3: ${questions[i].answers["3"]}</p>
    </label>
    <label>
        <input class= "radiobtn" type="radio" name="question${i + 1}" value="4">
        <p class="option">4: ${questions[i].answers["4"]}</p>
    </label>
    </div>`;

    questionsString += qandaOpt;
  }

  containQ.innerHTML = questionsString;

  //containQ.appendChild(answersOpt)
}

startBtn.addEventListener("click", function () {
  document.querySelector("#start-button").style.visibility = "hidden"
  var userTime = 30
  
    interval = setInterval(function (){
      if (userTime > 0) {
      userTime--
      document.querySelector("#timer").innerHTML = `<p>seconds remaining: ${userTime}<p>`
      console.log(userTime)
      } else {  
      pages[currentPage].classList.remove("active-slide")
      document.querySelector("#right-or-wrong").classList.add("active-slide")
      document.querySelector("#right-or-wrong").innerHTML= `<div>
      
      <p>Time is up!</p>
      <button id= "try-again">Try again!</button>
      </div>`
     document.querySelector("#try-again").addEventListener("click", function () {
        location.reload
      })
    }
  },1000)
  buildQuestions();
  var pages = document.querySelectorAll(".page");
  console.log(pages);
  var currentPage = 0;



  function showPage(index) {
   
    pages[currentPage].classList.remove("active-slide");
    console.log(index) //if index is equal to 5, then show form (write function) put else if index is not = to 5 run, wrap 108 
    pages[index].classList.add("active-slide");
    currentPage = index;
    //then local storage set item then get item when loading high scores page
  }

  showPage(currentPage);

  function showNextPage() {
    console.log(currentPage)
    if (currentPage >= questions.length - 1) {
      
      pages[questions.length - 1].classList.remove("active-slide")
      document.querySelector("#right-or-wrong").classList.add("active-slide")
      document.querySelector("#right-or-wrong").innerHTML= `
      <div>
      <p>${userA}</p>
      <p>Your final score is: ${userScore}/${questions.length}
      </div>
      <form>
      <label>
      Enter your intials here:
      <input id= "final-score" type= "text"  placeholder= "Enter your intials" value= ""> 
      </label>
      <input type= "submit" value= "submit" id= "high-score">
      </form>
      `
      clearInterval(interval)
      document.querySelector("#high-score").addEventListener("click", function() {
        let currentScores = localStorage.getItem("high-scores")
        JSON.parse(currentScores)
        currentScores[document.querySelector("#final-score").value] = userScore
        localStorage.setItem("high-scores", JSON.stringify(currentScores))
      })
    } else {
      showPage(currentPage + 1);
      document.querySelector("#right-or-wrong").innerHTML= userA 
    }

    
    
    //showPage(currentPage + 1);
  }
  document.querySelectorAll(".radiobtn").forEach((elem) => {
    elem.addEventListener("change", function (event) {
      var item = event.target.value;
      //take the item and compare it to the current questions correct answer to decide right or wrong
      console.log(event.target);
      if (questions[currentPage].correct === item) {
        console.log("correct")
        userA = "correct" 
        userScore++
      
      
      }
      else {
        //tell the user that they are wrong
        console.log("wrong")
        userA = "wrong"
      
      }
      showNextPage();
      console.log(showNextPage);
    });
  });
});
