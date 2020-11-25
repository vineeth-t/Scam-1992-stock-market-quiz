var readLineSync= require('readline-sync');
const chalk=require('chalk');
var score=0;

//leaderboard
var leaderBoard=[{
  name:'Pavant',
  score:'11'

},{
  name:'Vineeth',
  score:'10'
},{
  name:'Sailesh',
  score:'9'
}]

//function definition
function questiontype(question,answer,optionsArr){
  console.log(chalk.bgYellow.whiteBright (question));
  var index=readLineSync.keyInSelect(optionsArr);
  if(optionsArr[index]===answer){
    console.log(chalk.green('Congrats,Your answer is correct!!'));
    score++;
    console.log(chalk.bgRedBright('Current Score '+ score));
    console.log('\n');
  }else{
    console.log(chalk.redBright('oops!! wrong answer.'));
    console.log(chalk.green('Answer: '+answer));
    console.log(chalk.bgRedBright('Current Score '+ score));
    console.log('\n');
  }
}

//Declaring a question.
var questionOne={
  question:'What is the full form BSE?',
  optionsArr:["Bombay Stock Exchange","Border Stock Exchange ","Bullish stock Exchange","Bear Stock Exchange"],
  answer:"Bombay Stock Exchange"
}
var questionTwo={
  question:'What is the full form NSE?',
  optionsArr:["National Stock Exchange","North Stock Exchange","Narendra stock Exchange","Namo Stock Exchange"],
  answer:"National Stock Exchange"
}
var questionThree={
  question:'The web series Scam-1992 is the story of?',
  optionsArr:["Hansal Mehta","Harshad Mehta","Sucheta Dalal","Damani harshad"],
  answer:"Harshad Mehta"
}
var questionFour={
  question:'Whose is called Black Cobra of Stock Market?',
  optionsArr:["Rakesh Jhunjhunwala","Harshad Mehta ","Manu Manek","Damani radhaKrishna"],
  answer:"Manu Manek"
}
var questionFifth={
  question:'Who is the author of "The Scam: Who Won, Who Lost, Who Got Away"?',
  optionsArr:["Arundhati Roy","Debashis Basu · Sucheta Dalal","Robin sharma","Kiran Desai"],
  answer:"Debashis Basu · Sucheta Dalal"
}
var questionSixth={
  question:'What is the firm started by harshad mehta?',
  optionsArr:["Groww","Grow Less","upstox","Grow More"],
  answer:"Grow More"
}
var questionSeventh={
  question:'What is meant by term bearish in the stock market?',
  optionsArr:["Moving Up","Moving Down","Locked","Public Offering"],
  answer:"Moving Down"
}
var questionEight={
  question:'Who is the director of Scam-1992 web series?',
optionsArr:["Hansal Mehta","Harshad Mehta","Karan Johar","Rohith Shetty"],
  answer:"Hansal Mehta"
}
var questionNine={
  question:'What is the full form of NIFTY?',
optionsArr:["Nation Information and Foreign Trade","National Institute of Technology","National Stock Exchange Fifty"],
  answer:"National Stock Exchange Fifty"
}
var questionTen={
  question:'What does the term bullish means?',
optionsArr:["Moving Up","Moving Down","Locked","Public Offering"],
  answer:"Moving Up"
}
var questionEleven={
  question:'Which Trading Platform is Backed By RATAN TATA?',
optionsArr:["GROWW","UPSTOX","ZERODHA","Angel Broking"],
  answer:"UPSTOX"
}
var questionArray=[questionOne,questionTwo,questionThree,questionFour,questionFifth,questionSixth,questionSeventh];

console.log(chalk.bgCyanBright.black("Hi, Welcome to Share Market Quiz"));
console.log('\n');
console.log(chalk.bgBlack.green(
    'Please read the instructions given below'+'\n'+
    '1) Enter your Name to parctipate in the quiz'+'\n'+
    '2) Basic knowledge of StockMarket/Scam-1992 required'+'\n'+
    '3) Each question carries one mark(no negative marks for wrong answers)'+'\n'+
    '4) There are two levels in the Quiz'+'\n'+
    '     i) level 1 for absolute beginner'+'\n'+
    '     ii)level 2 required some additional knowledge of StockMarket.')+'\n'+chalk.bgRed('Note:you need to score atleast 5 marks for reaching level2')
          );
console.log('\n');
var UserName=readLineSync.question(chalk.bgBlack.whiteBright("Please enter Your name to participate in quiz :"));
console.log('\n');
console.log(chalk.bgRedBright('Welcome'+" "+UserName+'!'));
//showing leaderboard scores
if(readLineSync.keyInYN('Do you want to start the quiz?')){
 for(var i=0;i<questionArray.length;i++){
  questiontype(questionArray[i].question,questionArray[i].answer,questionArray[i].optionsArr)
}
}else{
  console.log('Thank You');
}
if(score>=5){
  console.log('\n')
  console.log(chalk.bgRedBright('Your Total Score for level-1 is :'+ score +" You are eligible for Level 2"));
  console.log('\n')
  console.log(chalk.bgCyanBright.black('Welcome to Level-2'))
  var questionArray=[questionEight,questionNine,questionTen,questionEleven]
    if(readLineSync.keyInYN('Do you want to start the Level 2? ' )){
            for(var i=0;i<questionArray.length;i++){
            questiontype(questionArray[i].question,questionArray[i].answer,questionArray[i].optionsArr)
             }
  console.log('\n')
  console.log(chalk.bgRedBright('Your Total Score is :'+ score+'\n'+'Thank You For Participating in the Quiz'))
    }else{
      console.log('Thank You');
      console.log(chalk.bgRedBright('Your Total Score is :'+ score+'\n'+'Thank You For Participating in the Quiz'))
    }
}else{
 console.log(chalk.bgRedBright('Your Total Score is :'+ score+'\n'+'Thank You For Participating in the Quiz'))
}
console.log('\n'+'*------ScoreCard------*');
for(var i=0;i<leaderBoard.length;i++){
  
  console.log(chalk.yellow(leaderBoard[i].name+" - "+leaderBoard[i].score));
}
var flag=0
for(var i=0;i<leaderBoard.length;i++){
  if(score>=leaderBoard[i].score){
    console.log(chalk.green('\n'+'congratulations! '+UserName+' You have beaten the high score,send your score screenshot.We will update the scoreboard'))
    flag=1;
    console.log(chalk.green('\n'+'ThankYou. Have a Good day'))
    break;
  }
}
if(flag===0){
  console.log(chalk.green("Try Again for getting high score"));
}