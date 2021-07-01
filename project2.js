var readlineSync=require("readline-sync");
var chalkColor=require("chalk");
var emoji=require("node-emoji")
var score=0;
var userName=readlineSync.question("What is your name? ");
console.log(chalkColor.bgCyan("Welcome "+userName+" to "+chalkColor.bold.underline.green("Quiz on India !!")));

var highScores=[
  {
    name:"Ananya Singh",
    score:6
  }  
]
function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer===answer){
    console.log(chalkColor.green("your answer is right"),emoji.get("smile"));
    score=score+1;
  }
  else{
    console.log(chalkColor.red("your answer is wrong"),emoji.get("unamused"));
  }
  console.log("Score:- ",score);
  console.log("--------------------------------------------------------------------");
}
var userQuestion=[
  {
    
    question:chalkColor.bgGreen("1. How many countries border India?")+chalkColor.yellow("\n a.9\n b.14\n c.2\n d.7\n")+"Your answer:",
    answer:"d"
  },
  {
    question:chalkColor.bgGreen("2. Where did Chess first originate? ")+chalkColor.yellow("\n a.India\n b.Spain\n c.China\n d.Iran\n")+"Your answer:",
    answer:"a"
  },
  {
     question:chalkColor.bgGreen("3. Which Indian city was the capital of the Gaekwad Dynasty ?")+chalkColor.yellow("\n a.Surat\n b.Vapi\n c.Ahmedabad\n d.Vadodara\n")+"Your answer:",
    answer:"d"
  },
  {
     question:chalkColor.bgGreen("4. Who was the first education minister of free India?")+chalkColor.yellow("\n a.Sardar Vallabhbhai Patel\n b.Rajendra Prasad\n c.Maulana Abul Kalam Azad\n d.Sarvapelli Radhakrishnan\n")+"Your answer:",
    answer:"c"
  },
  {
      question:chalkColor.bgGreen("5. When did Radio broadcasting begin in  India?")+chalkColor.yellow("\n a.1936\n b.1927\n c.1930\n d.1956\n")+"Your answer:",
     answer:"b"
  },
  {
       question:chalkColor.bgGreen("6. When was the Indian Medical Council set up?")+chalkColor.yellow("\n a.1975\n b.1981\n c.1971\n d.1980\n")+"Your answer:",
      answer:"c"
  },
  {
     question:chalkColor.bgGreen("7. Who was the last Mughal emperor of India?")+chalkColor.yellow("\n a.jahangir\n b.Nadir Shah\n c.Muhammad Shah\n d.Bahadur Shah II\n")+"Your answer:",
    answer:"d"
  },
  {
     question:chalkColor.bgGreen("8. What is the name of India's National Aquatic Animal?")+chalkColor.yellow("\n a.River Dolphin\n b.Crocodile\n c.Katla Fish\n d.Green Fog\n")+"Your answer:",
    answer:"a"
  },
  {
     question:chalkColor.bgGreen("9. Hindi Divas celebrate in India on______?")+chalkColor.yellow("\n a.14th september\n b.12th April\n c.10th April\n d.14th December\n")+"Your answer:",
    answer:"a"
  },
  {
     question:chalkColor.bgGreen("10.India's population density________?")+chalkColor.yellow("\n a.382/km^2\n b.290/km^2\n c.375/km^2\n d.423/km^2\n")+"Your answer:",
    answer:"a" 
  },
]
for(var i=0;i<userQuestion.length;i++){
  play(userQuestion[i].question,userQuestion[i].answer)
}
if(score>=9){
  console.log("Total Score:-",score,"points")
  console.log(chalkColor.bgRed("Congratulations!You advanced to level 5!",emoji.get("star-struck")))
  console.log("----------------------")
}
else if(score>=7){
  console.log("Total Score:-",score,"points")
  console.log(chalkColor.bgRed("Congratulations!You advanced to level 4!",emoji.get("star-struck")))
  console.log("----------------------")
}
else if(score>=5){
  console.log("Total Score:-",score,"points")
  console.log(chalkColor.bgRed("Congratulations!You advanced to level 3!",emoji.get("star-struck")))
  console.log("----------------------")
}
else if(score>=4){
  console.log("Total Score:-",score,"points")
  console.log(chalkColor.bgRed("Congratulations!You advanced to level 2!",emoji.get("star-struck")))
  console.log("----------------------")
}
else{
  console.log("Total Score:-",score,"points")
  console.log(chalkColor.bgRed("Try again to score at least 4 points to advance to level 2!"))
  console.log("----------------------")
}
for(var j=0;j<highScores.length;j++){
  if(score<highScores[j].score){
    console.log(chalkColor.bgYellow("Highscore:",highScores[j].name,highScores[j].score))
  }
  else{
    console.log(chalkColor.bgCyan("Old Highscore:",highScores[j].name,highScores[j].score))
    console.log("----------------------")
    console.log(chalkColor.bgYellow(emoji.get("medal"),"Congratulations!!You have made new highscore by scoring",score,"points!",emoji.get("medal")))
  }
}
