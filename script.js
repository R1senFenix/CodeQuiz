document.addEventListener("DOMContentLoaded", function () {
    // Handler when the DOM is fully loaded
    var showThatQuiz = document.querySelector(".startQuizButton");
    var getQuestionTitle = document.querySelector("#questionTitle");
    var getQuestionChoices = document.querySelector("#questionChoices")


    for (var i = 0; i < questions.length; i++) {
        var addedTitle = questions[i].title;
        console.log(addedTitle);
        getQuestionTitle.textContent = addedTitle;

        for (var fewChoices = 0; fewChoices < questions[i].choices.length; fewChoices++) {
            var addedChoices = questions[i].choices[fewChoices];
            console.log(addedChoices);
            getQuestionChoices.textContent = addedChoices;
        }
    };
    //postedQuestion function () {

    //}



});