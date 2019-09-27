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


//create a questionsCounter variable equal to 0
var questionsCounter = 0;
var timeTodisplay = 0;
var startTimer;
var showNextQuestion;
var showNextQuestionImmediately;
var rightAnswers=0;
var wrongAnswers=0;
var NotAttempted=0;

var displayQuestion = function () {

    clearInterval(showNextQuestion);
    $("#showThis").empty();

    var timerSection = $("<div>");
    timerSection.attr("id", "timerDisplay");
    $("#showThis").append(timerSection);

    var questionSection = $("<h4>");
    questionSection.attr("id", "question");
    $("#showThis").append(questionSection);

    var option1 = $("<h4>");
    option1.attr("id", "option1");
    option1.attr("class", "option");
    $("#showThis").append(option1);

    var option2 = $("<h4>");
    option2.attr("id", "option2");
    option2.attr("class", "option");
    $("#showThis").append(option2);

    var option3 = $("<h4>");
    option3.attr("id", "option3");
    option3.attr("class", "option");
    $("#showThis").append(option3);

    var option4 = $("<h4>");
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
        $("#showThis").append($("<p>").text("You are done with all questions"));
        $("#showThis").append($("<h4>").text("Total questions : " + questions.length));
        $("#showThis").append($("<h4>").text("Right Answers : " + rightAnswers));
        $("#showThis").append($("<h4>").text("Wrong Answers : " + wrongAnswers));
        $("#showThis").append($("<h4>").text("Not Attempted : " + NotAttempted));
    }
}

var start = function () {
    //hide the start button
    $("#showThis").empty();

    //display first question
    displayQuestion();
}

//when user clicks on start button
$("#startButton").on("click", start);


//timer to cretae 30 seconds question display
var timer = function () {
    if (timeTodisplay > 0) {
        timeTodisplay--;
        if(timeTodisplay>=0 && timeTodisplay<=9)
        {
            timeTodisplay='0'+timeTodisplay;
        }
        $("#timerDisplay").text("Time Left: 00 : " + timeTodisplay + " seconds");
    }
    else {
        clearInterval(startTimer);
        clearInterval(showNextQuestion);
        $("#showThis").empty();
        NotAttempted++;
        $("#showThis").append($("<h4>").text("Time Up!"));
        $("#showThis").append($("<p>").text("The Correct Answer was: " + questions[questionsCounter-1].answer));
        var gif=$("<img src='./assets/images/timeup.gif'>");
        $("#showThis").append(gif);
        //trigger the timer interval for the next question to show up
        showNextQuestion = setInterval(displayQuestion, 1000*3);
    }
}

// create option click event
// once the click event is triggered 
// get the text of that option using this
// compare the text with corresponding right answer
// if they match update showThis with right answer
// if they are not  update showThis with wrong answer
//trigger the next question event in 2 seconds
$(document).on("click", ".option", function () {    
    var optionselected = this.innerText;
    if (optionselected === questions[questionsCounter - 1].answer) {
        rightAnswers++
        $("#showThis").empty();
        $("#showThis").append($("<p>").text("Time Left : 00 : " + timeTodisplay + " seconds"));
        $("#showThis").append($("<h4>").text("CORRECT!"));
        var gif=$("<img src='./assets/images/right.gif'>");
        $("#showThis").append(gif);
        clearInterval(startTimer);
        clearInterval(showNextQuestion);
        //trigger the timer interval for the next question to show up
        showNextQuestion = setInterval(displayQuestion, 1000*3);
    }
    else {
        wrongAnswers++;
        $("#showThis").empty();
        $("#showThis").append($("<p>").text("Time Left : 00 : " + timeTodisplay + " seconds"));
        $("#showThis").append($("<h4>").text("Nope!"));
        $("#showThis").append($("<p>").text("The Correct Answer was: " + questions[questionsCounter-1].answer));
        var gif=$("<img src='./assets/images/wrong.gif'>");
        $("#showThis").append(gif);
        clearInterval(startTimer);
        clearInterval(showNextQuestion);
        //trigger the timer interval for the next question to show up
        showNextQuestion = setInterval(displayQuestion, 1000*3);
    }
});

















