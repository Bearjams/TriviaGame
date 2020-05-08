var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var number = 45;
var intervalID;

var questions = [{
    question: "What word would a golfer yell after a bad shot?",
    answerList: ["Watch Out", "Nine", "Four", "Woah"],
    answer: 2,
},{
    question: "Which is not a name of a golf club?",
    answerList: ["Driver", "Scraper", "Putter", "Iron"],
    answer: 1,
},{
    question: "Which is not a brand of golf ball?",
    answerList: ["Titleist", "Vice", "Penguin", "Callaway"],
    answer: 2,
},{
    question: "What year was golf invented?",
    answerList: ["1764", "1904", "1836", "1879"],
    answer: 0,
},{
    question: "Who isnt a professional golfer?",
    answerList: ["Tiger Woods", "Rory McIiroy", "John Daly", "Ernesto DeLa Cruz"],
    answer: 3,
},{
    question: "Which one is a famous golf course?",
    answerList: ["Bethpage Black", "Quicksand Falls", "Greek Isles", "The Pit"],
    answer: 0,
},{
    question: "Which anwser is not a traditional golf hole?",
    answerList: ["Par Four", "Par Five", "Par Six", "Par Three"],
    answer: 2,
},{
    question: "Who has won the most majors?",
    answerList: ["Jack Nicklaus", "Walter Hagen", "Arnold Palmer", "Tiger Woods"],
    answer: 0, 
},{
    question: "How many holes are there on a golf course?",
    answerList: ["13", "18", "8", "20"],
    answer: 1,
},{
    question: "Where was the game of golf created?",
    answerList: ["America", "Scotland", "Ireland", "England"],
    answer: 1,
}];

$("#start").on("click", function(){

    $(this).hide();

    $("#time").html("<h2>Time Remaining: 45 Seconds</h2>" + "<br>");

    run();

    $("#question1").html("<h3>" + questions[0].question + "</h3>");
    $("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
        + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answerList[1] + "</label>"
        + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].answerList[2] + "</label>"
        + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[0].answerList[3] + "</label><br><br>"
    );

    $("#question2").html("<h3>" + questions[1].question + "</h3>");
    $("#answer2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[1].answerList[0] + "</label>"
        + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].answerList[1] + "</label>"
        + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].answerList[2] + "</label>"
        + "<input type='radio' name='answer2' value='3'>" + "<label>" + questions[1].answerList[3] + "</label><br><br>"
    );


    $("#question3").html("<h3>" + questions[2].question + "</h3>");
    $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].answerList[0] + "</label>"
        + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].answerList[1] + "</label>"
        + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].answerList[2] + "</label>"
        + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[2].answerList[3] + "</label><br><br>"
    );

    $("#question4").html("<h3>" + questions[3].question + "</h3>");
    $("#answer4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + questions[3].answerList[0] + "</label>"
        + "<input type='radio' name='answer4' value='1'>" + "<label>" + questions[3].answerList[1] + "</label>"
        + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[3].answerList[2] + "</label>"
        + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[3].answerList[3] + "</label><br><br>"
    );


    $("#question5").html("<h3>" + questions[4].question + "</h3>");
    $("#answer5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + questions[4].answerList[0] + "</label>"
        + "<input type='radio' name='answer5' value='1'>" + "<label>" + questions[4].answerList[1] + "</label>"
        + "<input type='radio' name='answer5' value='2'>" + "<label>" + questions[4].answerList[2] + "</label>"
        + "<input type='radio' name='answer5' value='3'>" + "<label>" + questions[4].answerList[3] + "</label><br><br>"
    );

    $("#question6").html("<h3>" + questions[5].question + "</h3>");
    $("#answer6").html("<input type='radio' name='answer6' value='0'>" + "<label>" + questions[5].answerList[0] + "</label>"
        + "<input type='radio' name='answer6' value='1'>" + "<label>" + questions[5].answerList[1] + "</label>"
        + "<input type='radio' name='answer6' value='2'>" + "<label>" + questions[5].answerList[2] + "</label>"
        + "<input type='radio' name='answer6' value='3'>" + "<label>" + questions[5].answerList[3] + "</label><br><br>"
    );

    $("#question7").html("<h3>" + questions[6].question + "</h3>");
    $("#answer7").html("<input type='radio' name='answer7' value='0'>" + "<label>" + questions[6].answerList[0] + "</label>"
        + "<input type='radio' name='answer7' value='1'>" + "<label>" + questions[6].answerList[1] + "</label>"
        + "<input type='radio' name='answer7' value='2'>" + "<label>" + questions[6].answerList[2] + "</label>"
        + "<input type='radio' name='answer7' value='3'>" + "<label>" + questions[6].answerList[3] + "</label><br><br>"
    );

    $("#question8").html("<h3>" + questions[7].question + "</h3>");
    $("#answer8").html("<input type='radio' name='answer8' value='0'>" + "<label>" + questions[7].answerList[0] + "</label>"
        + "<input type='radio' name='answer8' value='1'>" + "<label>" + questions[7].answerList[1] + "</label>"
        + "<input type='radio' name='answer8' value='2'>" + "<label>" + questions[7].answerList[2] + "</label>"
        + "<input type='radio' name='answer8' value='3'>" + "<label>" + questions[7].answerList[3] + "</label><br><br>"
    );

    $("#question9").html("<h3>" + questions[8].question + "</h3>");
    $("#answer9").html("<input type='radio' name='answer9' value='0'>" + "<label>" + questions[8].answerList[0] + "</label>"
        + "<input type='radio' name='answer9' value='1'>" + "<label>" + questions[8].answerList[1] + "</label>"
        + "<input type='radio' name='answer9' value='2'>" + "<label>" + questions[8].answerList[2] + "</label>"
        + "<input type='radio' name='answer9' value='3'>" + "<label>" + questions[8].answerList[3] + "</label><br><br>"
    );

    $("#question10").html("<h3>" + questions[9].question + "</h3>");
    $("#answer10").html("<input type='radio' name='answer9' value='0'>" + "<label>" + questions[9].answerList[0] + "</label>"
        + "<input type='radio' name='answer10' value='1'>" + "<label>" + questions[9].answerList[1] + "</label>"
        + "<input type='radio' name='answer10' value='2'>" + "<label>" + questions[9].answerList[2] + "</label>"
        + "<input type='radio' name='answer10' value='3'>" + "<label>" + questions[9].answerList[3] + "</label><br><br>"
    );

    $("#submit").html("<button id='done' class='btn'>Done</button>");

    $("#done").on("click", function(){
        keepingScore();
        displayResults();
    });
});

function run(){
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);
}

function decrement(){
    number--;
    $("#time").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>");
    if(number === 0){
        stop();
        keepingScore();
        displayResults();
    }
}

function displayResults(){
    $("#time").hide();
    $("#question1").hide();
    $("#answer1").hide();
    $("#question2").hide();
    $("#answer2").hide();
    $("#question3").hide();
    $("#answer3").hide();
    $("#question4").hide();
    $("#answer4").hide();
    $("#question5").hide();
    $("#answer5").hide();
    $("#question6").hide();
    $("#answer6").hide();
    $("#question7").hide();
    $("#answer7").hide();
    $("#submit").hide();
    $("#question8").hide();
    $("#answer8").hide();
    $("#submit").hide();
    $("#question9").hide();
    $("#answer9").hide();
    $("#submit").hide();
    $("#question10").hide();
    $("#answer10").hide();
    $("#submit").hide();
    
    $("#resultsMessage").html("<h3>Finished!</h3>");
    $("#correct").html("Correct Answers: " + correctAnswers);
    $("#incorrect").html("Incorrect Anwsers: " + incorrectAnswers);
    $("#unanswered").html("Unanswered: " + unanswered)
}

function keepingScore(){

    var userAnswer1 = $("input[name='answer1']:checked").val();
    var userAnswer2 = $("input[name='answer2']:checked").val();
    var userAnswer3 = $("input[name='answer3']:checked").val();
    var userAnswer4 = $("input[name='answer4']:checked").val();
    var userAnswer5 = $("input[name='answer5']:checked").val();
    var userAnswer6 = $("input[name='answer6']:checked").val();
    var userAnswer7 = $("input[name='answer7']:checked").val();
    var userAnswer8 = $("input[name='answer8']:checked").val();
    var userAnswer9 = $("input[name='answer9']:checked").val();
    var userAnswer10 = $("input[name='answer10']:checked").val();

    if(userAnswer1 === undefined){
        unanswered++;
    }
    else if(userAnswer1 == questions[0].answer){
        correctAnswers++;
    }
    else{
        incorrectAnswers++;
    }

    if(userAnswer2 === undefined){
        unanswered++;
    }
    else if(userAnswer2 == questions[1].answer){
        correctAnswers++;
    }
    else{
        incorrectAnswers++;
    }

    if(userAnswer2 === undefined){
        unanswered++;
    }
    else if(userAnswer2 == questions[1].answer){
        correctAnswers++;
    }
    else{
        incorrectAnswers++;
    }

    if(userAnswer3 === undefined){
        unanswered++;
    }
    else if(userAnswer3 == questions[2].answer){
        correctAnswers++;
    }
    else{
        incorrectAnswers++;
    }

    if(userAnswer4 === undefined){
        unanswered++;
    }
    else if(userAnswer4 == questions[3].answer){
        correctAnswers++;
    }
    else{
        incorrectAnswers++;
    }

    if(userAnswer5 === undefined){
        unanswered++;
    }
    else if(userAnswer5 == questions[4].answer){
        correctAnswers++;
    }
    else{
        incorrectAnswers++;
    }

    if(userAnswer6 === undefined){
        unanswered++;
    }
    else if(userAnswer6 == questions[5].answer){
        correctAnswers++;
    }
    else{
        incorrectAnswers++;
    }

    if(userAnswer7 === undefined){
        unanswered++;
    }
    else if(userAnswer7 == questions[6].answer){
        correctAnswers++;
    }
    else{
        incorrectAnswers++;
    }

    if(userAnswer8 === undefined){
        unanswered++;
    }
    else if(userAnswer8 == questions[7].answer){
        correctAnswers++;
    }
    else{
        incorrectAnswers++;
    }

    if(userAnswer9 === undefined){
        unanswered++;
    }
    else if(userAnswer9 == questions[8].answer){
        correctAnswers++;
    }
    else{
        incorrectAnswers++;
    }

    if(userAnswer10 === undefined){
        unanswered++;
    }
    else if(userAnswer10 == questions[9].answer){
        correctAnswers++;
    }
    else{
        incorrectAnswers++;
    }




}
