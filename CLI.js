var readlineSync = require('readline-sync');
const chalk = require('chalk');
var userName = readlineSync.question('May I have your name? ');
console.log(`Welcome ${userName}`);

let score=0;
function play(question,answer)
{
  let userAnswer=readlineSync.question(question);
  if(userAnswer===answer)
  {
    score++;
    console.log(chalk.green('Correct'));
    
  }
  else
  {
    console.log(chalk.red('Wrong'));
  }
  console.log(chalk.blue(`Score ${score}`));
  console.log("------------------")
}

const questionslist=[{
  question:"What is the decimal equivalent of the binary number 10111? ",
  answer:"23"
},
{
  question:"What size is twice the size of A4 paper? ",
  answer:"A3"
},
{
  question:"How many bytes does 4 kilobytes represent? ",
  answer:"4096"
},
{
  question:"The four bits are called? ",
  answer:" Nibble"
},
{
  question:"binary value for the decimal value 44? ",
  answer:" 101100"
}];

for(let i=0;i<questionslist.length;i++)
{
  play(questionslist[i].question,questionslist[i].answer);
}
console.log("Quiz Complete");
console.log(chalk.yellow(`Your Total Score is ${score}`));

