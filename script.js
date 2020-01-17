document.addEventListener("DOMContentLoaded", function () {
    // Handler when the DOM is fully loaded
    var showThatQuiz = document.querySelector(".startQuizBtn");
    var getQuestionTitle = document.querySelector("#titleHeadings");
    var getQuestionChoices = document.querySelector("#questionChoices")
    var timeWatch = document.querySelector(".activeTimer");

    //var mainEl = document.getElementById("main");

    var timerStartsAt = 75;
    var index = 0;
    var nowScore = "";

    showThatQuiz.addEventListener('click', function () {


        var startbutton = document.querySelector('.startQuizBtn');
        startbutton.style.display = 'none';
        startQuiz(index);
        startTimer();


    });

    function startQuiz() {
        // see first question
        // seee first answer set
        //  
        showQuestion(index);
        $(".currentChoices").on("click", function () {
            checkAnswers();
        });
    }

    function showQuestion(index) { //
        // clear existing question set    

        var thisQuestion = questions[index];
        var addedTitle = thisQuestion.title;
        console.log(addedTitle);
        var createQuestionTitles = document.createElement("h3");
        createQuestionTitles.setAttribute("class", "currentQuestion");
        createQuestionTitles.innerText = addedTitle;
        createQuestionTitles.setAttribute
        getQuestionTitle.appendChild(createQuestionTitles);
        //console.log("current question is " + currentQuestion);
        iterateAnswers(thisQuestion);
    }

    function iterateAnswers(thisQuestion) {
        for (var i = 0;
            i < thisQuestion.choices.length;
            i++) {

            var addedChoices = thisQuestion.choices[i];
            console.log(addedChoices);
            // getQuestionChoices.textContent = addedChoices;
            var createQuestionButtons = document.createElement("button");
            createQuestionButtons.setAttribute("class", "currentChoices");
            createQuestionButtons.setAttribute("value", addedChoices);
            var breakbutton = document.createElement('br');
            createQuestionButtons.textContent = addedChoices;
            getQuestionChoices.appendChild(createQuestionButtons);
            getQuestionChoices.appendChild(breakbutton);


        }
    }


    function checkAnswers() {
        //if answer === correctAnswer nextquestion
        var selectedAnswer = document.querySelector(".currentChoices").value;
        if (selectedAnswer == questions[index].correctAnswer) {
            $(".currentQuestion").remove();
            $(".currentChoices").remove();
            $("br").remove();
            index++;
            startQuiz(index);
        } else {
            timerStartsAt = timerStartsAt - 15;
            $(".currentQuestion").remove();
            $(".currentChoices").remove();
            $("br").remove();
            index++;
            startQuiz(index);
        }
    }


    function startTimer() {
        var timerInterval = setInterval(function () {
            timerStartsAt--;
            timeWatch.textContent = timerStartsAt;

            if (timerStartsAt <= 0) {
                clearInterval(timerInterval);
                //insert stop function here
                return;
            }

        }, 1000);
    }



});