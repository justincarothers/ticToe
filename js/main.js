var displayX ="<img src='img/exes.png'>";
var displayO ="<img src='img/ohs.png'>";
var turn = 1;
var count = 0;
var xScore = 0;
var oScore = 0;
var xWins = false;
var oWins = false;
var playerTurn = "";

function checkForWin() {
  if ($("#1").hasClass("X") && $("#2").hasClass("X") && $("#3").hasClass("X")) { xWins = true;}
  else if ($("#4").hasClass("X") && $("#5").hasClass("X") && $("#6").hasClass("X")) { xWins = true; }
  else if ($("#7").hasClass("X") && $("#8").hasClass("X") && $("#9").hasClass("X")) { xWins = true; }
  else if ($("#1").hasClass("X") && $("#4").hasClass("X") && $("#7").hasClass("X")) { xWins = true; }
  else if ($("#2").hasClass("X") && $("#5").hasClass("X") && $("#8").hasClass("X")) { xWins = true; }
  else if ($("#3").hasClass("X") && $("#6").hasClass("X") && $("#9").hasClass("X")) { xWins = true; }
  else if ($("#3").hasClass("X") && $("#5").hasClass("X") && $("#7").hasClass("X")) { xWins = true; }
  else if ($("#1").hasClass("X") && $("#5").hasClass("X") && $("#9").hasClass("X")) { xWins = true; }

  else if ($("#1").hasClass("O") && $("#2").hasClass("O") && $("#3").hasClass("O")) { oWins = true; }
  else if ($("#4").hasClass("O") && $("#5").hasClass("O") && $("#6").hasClass("O")) { oWins = true; }
  else if ($("#7").hasClass("O") && $("#8").hasClass("O") && $("#9").hasClass("O")) { oWins = true; }
  else if ($("#1").hasClass("O") && $("#4").hasClass("O") && $("#7").hasClass("O")) { oWins = true; }
  else if ($("#2").hasClass("O") && $("#5").hasClass("O") && $("#8").hasClass("O")) { oWins = true; }
  else if ($("#3").hasClass("O") && $("#6").hasClass("O") && $("#9").hasClass("O")) { oWins = true; }
  else if ($("#3").hasClass("O") && $("#5").hasClass("O") && $("#7").hasClass("O")) { oWins = true; }
  else if ($("#1").hasClass("O") && $("#5").hasClass("O") && $("#9").hasClass("O")) { oWins = true; }
}

  function endGame() {
    for (var i = 1; i < 9; i++) {
      $("#" + [i]).removeClass("X");
      $("#" + [i]).removeClass("O");
    }
    $("img").remove();
    xWins=false;
    oWins=false;
    count=0;
    $(".message").hide();

  }

  function writeTurn() {
    $("#playerTurn").text(playerTurn + " has next move!")
  }


$(document).ready(function() {
  $(".message").hide(); //hide message initially
  $(".scoreX").text(xScore);
  $(".scoreO").text(oScore);
  $(".boxes").click(function(event) {
    count++;
    var boxNum = $(this).attr("id");
    if (turn % 2 !== 0 ) {
      playerTurn = "O"
      $(this).addClass("X");
      $("#" + boxNum).prepend(displayX)
    } else if(turn % 2 == 0 ) {
      playerTurn = "X";
      $("#" + boxNum).prepend(displayO)
      $(this).addClass("O")
    }
    checkForWin();
    if (xWins) { endGame();$("#xWinMessage").fadeIn(3000);$(".main").hide(); xScore++;}
    if (oWins) { endGame();$("#oWinMessage").fadeIn(3000);$(".main").hide(); oScore++;}

    turn++;
    writeTurn();
    $(".scoreX").text(xScore);
    $(".scoreO").text(oScore);
    if (count == 9) {
      count = 0;
      alert("DRAW!")
      endGame();
    }
  });
  $(".message").click(function() {
    $("#xWinMessage").hide();$("#oWinMessage").hide();$(".main").fadeIn(2500);
  });
});
