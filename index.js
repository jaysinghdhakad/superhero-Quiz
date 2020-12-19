var readlineSync = require("readline-sync");
var chalk= require('chalk');
console.log(chalk.red("*****************"))
var playerName = readlineSync.question(chalk.blue("who approaches the mighty thor ?"));
console.log(chalk.blue("*****************"))
console.log(chalk.bgWhite.red(playerName + " do you want to play a game ?anwer carefully, if you lose I will make you do engineering again but if you win all the riches of asgard can be yours to enjoy"))
console.log(chalk.red("*****************"))
var affirmation = readlineSync.question("what is your answer "+ playerName+" ?");
var score = 0;


if (affirmation === "yes"){
  console.log(chalk.blue("you are a gutsy one mortal. let us play the game "))
  console.log(chalk.red("*****************"))
  function play( question,answer){
  var userAnswer= readlineSync.question(chalk.red(question));
  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {console.log(chalk.blue("you are right mortal "));
  score = score + 1 ;
  }else {
  console.log(chalk.red("you are wrong mortal"));
  score = score -1;
  }
  console.log("your score is " +  score);
  console.log(chalk.blue("*****************"))
  
  }
  
  var highScore=[
    {name:"jay", score:8},{name:"deepansh",score:7},{name:"akash",score:5},
  ]
  var questions=[

{question: "what is the name of my brother?", answer: "loki"},
{ question: "what is the name of my hammer?", answer: "mjolnir"},
 { question: "what is the name of my girlfriend?", answer:"jane foster"},
{ question:"what is the name of my mother?",answer:"freya"},
 {question:"what is the name of my best friend?", answer: "hamdale"},
 {question:"what is the name of my rival?", answer:"hulk"},
 { question:"what is the name of my friend tree?", answer: "groot"},
{question:"what is the name of my friend ironman?", answer:"tony stark"}
]
for(i=0;i<questions.length;i++){
play(questions[i].question,questions[i].answer);
}
console.log(chalk.blue("highscore holder is " + highScore[0].name))
  console.log(chalk.blue("And the high score is " + highScore[0].score))
  console.log(chalk.red("*****************"))
  
}
  
 
else{
  console.log(chalk.red("weakness enrrages me mortal go back to midguard"))
}

