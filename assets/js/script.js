//variables
var containQ = document.querySelector("#questions")
var containA = document.querySelector("#answers")
var startBtn = document.querySelector("#startbutton")

  
  let questions = [
    {
      question: "Commonly used data types do not include: ",
      answers: {
        1: "Numbers",
        2: "Boooleans",
        3: "Alerts",
        4: "Strings"
      },
      correct: "3",
    },
    { 
      question: "Arrays in JavaScript can be used to store:",
      answers: {
        1: "numbers and strings",
        2: "other arrays",
        3: "booleans",
        4: "all of the above"
      },
      correct: "4"
    },
    { 
      question: "What is the best programming language?",
      answers: {
        1: "Purple",
        2: "Green",
        3: "Red",
        4: "Blue"
      },
      correct: "3"
    },
    { 
      question: "When did the Titanic sink?",
      answers: {
        1: "Purple",
        2: "Green",
        3: "Red",
        4: "Blue"
      },
      correct: "4"
    },
    { 
      question: "When did the first Star Wars come out?",
      answers: {
        1: "Purple",
        2: "Green",
        3: "Red",
        4: "Blue"
      },
      correct: "3"
    }
  ]
  
 //quiz functions 
 // 4 label tags for each question
 // 




 function buildQuestions() {
   
    let questionsString = ""
   
    for (let i = 0; i < questions.length;i++) {
      console.log(questions[i])
      
    
      let qandaOpt = 
    `<div class= "page">
    <div> ${questions[i].question}</div>
    <label>
        <input class= "radiobtn" type="radio" name="question${i + 1}" value="1">
        1: ${questions[i].answers["1"]}

    </label>
    <label>
        <input class= "radiobtn" type="radio" name="question${i + 1}" value="2">
        2: ${questions[i].answers["2"]}
	 </label>
    <label>
        <input class= "radiobtn" type="radio" name="question${i + 1}" value="3">
        3: ${questions[i].answers["3"]}
    </label>
    <label>
        <input class= "radiobtn" type="radio" name="question${i + 1}" value="4">
        4: ${questions[i].answers["4"]}
    </label>
    </div>`
    
    
    questionsString += qandaOpt
    
    }
      
      
  containQ.innerHTML= questionsString
    

    //containQ.appendChild(answersOpt)



 }




startBtn.addEventListener("click", function() {
  buildQuestions() 
  var pages = document.querySelectorAll(".page")
  var currentPage = 0 
  
  
  
   function showPage(index) {
  
    pages[currentPage].classList.remove("active-slide")
    pages[index].classList.add("active-slide")
    currentPage = index
    
  
   }
  
   showPage(currentPage)
  
  
   function showNextPage() {
    showPage(currentPage + 1)
  
  
  }

  document.querySelector(".radiobtn").addEventListener("click", showNextPage)
})



