const state = {}


function buildQuiz(){
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults(){
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let points = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    let userAnswer = (answerContainer.querySelector(selector) || {}).value;

  switch(userAnswer){
    case 'a':
    userAnswer=0;
    break;
    case 'b':
    userAnswer=1;
    break;
    case 'c':
    userAnswer=2;
    break;
    case 'd':
    userAnswer=3;
    break;
    case 'e':
    userAnswer=4;
    break;
    case 'f':
    userAnswer=4;
    break;
    case 'g':
    userAnswer=4;
    break;
  }
  
  points+=currentQuestion.userScore[userAnswer];

   
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${points}`;
}
let cost=0;
let pricePlanDis=document.getElementById("price-plan-val");
let totalCostDis=document.getElementById("total-cost");






function addToCost(newCost){
  
  state.newCost=newCost;
 totalCostDis.innerHTML=newCost;

}
function onPlan(newPlan){
state.newPlan=newPlan;
pricePlanDis.innerHTML=newPlan ; 

 
}



let proceedVar=document.getElementById("next");
 let pricePlanPass="";

function proceedFunc(){
  window.location.replace(`project4.html?cost=${state.newCost}&plan=${encodeURIComponent(state.newPlan)}`)


 }


 




const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
    question: "Do you already have health insurance?",
    answers: {
      a: "Yes",
      b: "No",
    },
    userScore: [0,0]
  },

  {
    question: "How many indiviudals do you want to cover?",
    answers: {
      a: "0",
      b: "1",
      c: "2",
      d: "3",
      e: "4",
      f: "5",
      g: "6+",
    
    },
    userScore: [0,10,20,30,40,50,60]
  },

  {
    question: "What is your Gender",
    answers: {
      a: "Male",
      b: "Female",
    
    },
    userScore: [70,30]
  },

  {
    question: "What is your age?",
    answers: {
      a: "18-35",
      b: "36-45",
      c: "46-55",
      d: "56 +"
    },
    userScore: [10,15,30,100]
  },

  {
    question: "Please indicate ethnicity?",
    answers: {
      a: "White",
      b: "Black",
      c: "Mixed",
      d: "Asian"
    },
    userScore: [65,35,35,35]
  },

  {
    question: "Do you have any underlining health condtions?",
    answers: {
      a: "No",
      b: "Yes",
      
    },
    userScore: [0,100]
  },

  {
    question: "Do you Smoke?",
    answers: {
      a: "No",
      b: "Yes",
      
    },
    userScore: [0,100]
  }
];



// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);




