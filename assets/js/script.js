//variables
var containQ = document.querySelector("#questions")
var containA = document.querySelector("#answers")
var submitBtn = document.querySelector("#submit")

  
  let questions = [
    {
      question: "What color is the sky?",
      answers: {
        1: "Purple",
        2: "Green",
        3: "Red",
        4: "Blue"
      },
      correct: "4",
    },
    { 
      question: "Who discovered gravity?",
      answers: {
        1: "Purple",
        2: "Green",
        3: "Red",
        4: "Blue"
      },
      correct: "2"
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
    let answersOpt = 
    `<label>
        <input type="radio" name="question1" value="1">
        1: ${questions[0].answers["1"]}

    </label>
    <label>
        <input type="radio" name="question1" value="2">
        2: ${questions[0].answers["2"]}
	</label>
    <label>
        <input type="radio" name="question1" value="3">
        3: ${questions[0].answers["3"]}
    </label>
    <label>
        <input type="radio" name="question1" value="4">
        4: ${questions[0].answers["4"]}
    </label>`
    
    
    
    let question1 = `<div> ${questions[0].question}</div>`
    containQ.innerHTML= question1 + answersOpt

    //containQ.appendChild(answersOpt)



 }

buildQuestions()
