var questions = [
    {
        question: "What was the first full length CGI movie?",
        option1: "A Bug's Life",
        option2: "Monsters Inc.",
        option3: "Toy Story",
        option4: "The Lion King",
        answer: "Toy Story",
        gif: ""
    },
    {
        question: "Which of these is NOT a name of one of the Spice Girls?",
        option1: "Sporty Spice",
        option2: "Fred Spice",
        option3: "Scary Spice",
        option4: "Posh Spice",
        answer: "Fred Spice",
        gif: ""
    },
    {
        question: "Which NBA team won the most titles in the 90s?",
        option1: "New York Knicks",
        option2: "Postland Trailblazers",
        option3: "Los Angeles Lakers",
        option4: "Chicago Bulls",
        answer: "Chicago Bulls",
        gif: ""
    },
    {
        question: "Which group released the hit song, 'Smells Like Teen Spirit'?",
        option1: "Nirvava",
        option2: "Backstreet Boys",
        option3: "The Offspring",
        option4: "No Doubt",
        answer: "Nirvava",
        gif: ""
    },
]

//------pseudoCode here----------
//create a questionsCounter variable equal to 0
var questionsCounter = 0;
var timeTodisplay = 0;
var startTimer;
var showNextQuestion;

var displayQuestion = function () {    

    $("#showThis").empty();

    var timerSection =$("<div>");
    timerSection.attr("id", "timerDisplay");
    $("#showThis").append(timerSection);

    var questionSection = $("<div>");
    questionSection.attr("id", "question");
    $("#showThis").append(questionSection);

    var option1 = $("<div>");
    option1.attr("id", "option1");
    option1.attr("class", "option");
    $("#showThis").append(option1);

    var option2 = $("<div>");
    option2.attr("id", "option2");
    option2.attr("class", "option");
    $("#showThis").append(option2);

    var option3 = $("<div>");
    option3.attr("id", "option3");
    option3.attr("class", "option");
    $("#showThis").append(option3);

    var option4 = $("<div>");
    option4.attr("id", "option4");
    option4.attr("class", "option");
    $("#showThis").append(option4);    

    if (questionsCounter < questions.length) {
        $("#question").text(questions[questionsCounter].question);
        $("#option1").text(questions[questionsCounter].option1);
        $("#option2").text(questions[questionsCounter].option2);
        $("#option3").text(questions[questionsCounter].option3);
        $("#option4").text(questions[questionsCounter].option4);

        questionsCounter++;
        timeTodisplay = 30;
        $("#timerDisplay").text("Time Left: 00 : " + timeTodisplay + " seconds");
        startTimer = setInterval(timer, 1000);
    }
    else {
        clearInterval(showNextQuestion);
        $("#showThis").text("You are done with all questions");
    }
}

//when user clicks on start button
$("#startButton").on("click", function () {

    //hide the start button
    $("#showThis").empty();
    questionsCounter = 0;

    //display first question
    displayQuestion();

    //trigger the timer interval for the next question to show up
    showNextQuestion = setInterval(displayQuestion, 1000 * 50);

});


var timer = function () {
    if (timeTodisplay > 0) {
        timeTodisplay--;
        $("#timerDisplay").text("Time Left: 00 : " + timeTodisplay + " seconds");
    }
    else {
        clearInterval(startTimer);
        $("#timerDisplay").text("Time Up");
    }
}



















//create an interval for 60 seconds
//var questionInterval=setInterval(nextQuestion,1000*60);

//then set a timer to 30 seconds
//var questionDisplayTimer=setTimeout(displayQuestion,1000*30);
//clearTimeout(questionDisplayTimer);

// create option click event
// once the click event is triggered 
// get the text of that option using this
// compare the text with corresponding right answer
// if they match show correct div
// if they are not show wrong div

//the moment user answered or the timer is back to 0
//display result section
