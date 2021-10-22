var questions = [
  {
    question: "Finish the sentence : ________ Johnson played in the Lakers",
    answer: "Magic"
  },
  {
    question: "Black Mamba is ______",
    answer: "Kobe Bryant"
  },
  {
    question: "Who won the 2010 World Series?",
    answer: "SF Giants"
  },
  {
    question:
      "Finish this sentence: What's the contact sport only played in USA ______?",
    answer: "NFL"
  },
  {
    question: "Who is the youngest player in the NBA?",
    answer: "Josh Primo "
  },
  {
    question: "What team did Lebron James win his first Championship?",
    answer: "Miami Heat"
  },
  {
    question: "How many Championships did Michael Jordan win in total?",
    answer: 6
  },
  {
    question: "How many Championships did Kobe Bryant won?",
    answer: 5
  },
  {
    question: "Who beat Ronda Rousey out of her title?",
    answer: "Holly Holm"
  },
  {
    question: "The SF Giants have won __ World Series to this day 6-7-16",
    answer: 8
  }
];

for (i = 0; i < questions.length; i++) {
  var q = questions[i].question;
  document.getElementById("question" + [i]).textContent = q;
}

function testResults() {
  var correct = 0;
  var incorrect = 0;
  for (i = 0; i < questions.length; i++) {
    var answer = questions[i].answer;
    var guess = document.getElementById("answer" + [i]).value;
    var questionSpot = document.getElementById("question" + [i]);
    if (answer == guess) {
      questionSpot.className = "correct";
      correct++;
    } else {
      questionSpot.className = "incorrect";
      incorrect++;
    }
  }
  document.getElementById("correct").textContent = correct;
  document.getElementById("incorrect").textContent = incorrect;
}
