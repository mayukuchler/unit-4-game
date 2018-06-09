$(document).ready(function() {

    var randomNumber = Math.floor(Math.random() * 101 + 19);
    var redCrystal = Math.floor(Math.random() * 11 + 1);
    var blueCrystal = Math.floor(Math.random() * 11 + 1);
    var yellowCrystal = Math.floor(Math.random() * 11 + 1);
    var greenCrystal = Math.floor(Math.random() * 11 + 1);
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    $("#solutionDiv").text(randomNumber);

    function resetScore() {
        totalScore = 0;
        randomNumber = Math.floor(Math.random() * 101 + 19);
        redCrystal = Math.floor(Math.random() * 11 + 1);
        blueCrystal = Math.floor(Math.random() * 11 + 1);
        yellowCrystal = Math.floor(Math.random() * 11 + 1);
        greenCrystal = Math.floor(Math.random() * 11 + 1);
        $("#totalScore").text(totalScore);
    };

    function winCount() {
        $("#totalScore").text(totalScore);
        if (totalScore === randomNumber) {
            wins ++;
            $("#wins").text(wins);
            resetScore();
        } else if (totalScore > randomNumber) {
            losses ++;
            $("#losses").text(losses);
            resetScore();
        }
    };

    $("#redCrystal").click(function() {
        totalScore = totalScore + redCrystal;
        winCount();
       console.log(totalScore); 
    });
    $("#blueCrystal").click(function() {
        totalScore = totalScore + blueCrystal;
        winCount();
    });
    $("#yellowCrystal").click(function() {
        totalScore = totalScore + yellowCrystal;
        winCount();
    });
    $("#greenCrystal").click(function() {
        totalScore = totalScore + greenCrystal;
        winCount();
    });
    
});

