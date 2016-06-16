var displayX ="<img src='img/exes.png'>";
var displayO ="<img src='img/ohs.png'>";
var turn = 1;
var xArray = [];
var oArray = [];
var combLength = 0;
var winningCombinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[3,5,7],[1,5,9]];
var xWin = 0;
var oWin = 0;
// function Board () {
//   this.spaces = [];
// }
// var newBoard = new Board();

function checker(input) {
  debugger;
  for (var i = 0; i < winningCombinations.length; i++) {
    if (input.join().includes(winningCombinations[i])){
      console.log(input.join().includes(winningCombinations[i]))
      console.log("TRUUEEEE");
      break;
      }







    // for (var j = 0; j < xArray.length; j++) {
    //   if ( xArray.sort() == winningCombinations[i].toString()) {
    //     alert("Good job, 'X'. You won!!")
    //     $("img").remove();
    //     xArray = [];
    //     oArray = [];
    //     xWin++;
    //   } else {
    //     console.log("nice try loser.");
    //     break;
    //   }
    // }
  }
};

// function checkWinnerO() {
  // debugger;
  for (var i = 0; i < winningCombinations.length; i++) {
    for (var j = 0; j < oArray.length; j++) {
      if (oArray.sort() == winningCombinations[i].toString()) {
        alert("Good job, 'O'. You won!!")
        $("img").remove();
        xArray = [];
        oArray = [];
        oWin++;
      } else {
        console.log("nice try loser.");
        break;
      }
    }
  }
};

// function checkForWin() {
//   var winningArrays =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
//   for(var i = 0; i < winningArrays.length; i++) {
//     space1 = winningArrays[i][0];
//     space2 = winningArrays[i][1];
//     space3 = winningArrays[i][2];
//     if ((newBoard.spaces[space1].xArray.sort()) && (newBoard.spaces[space1].xArray) === (newBoard.spaces[space2].xArray) && (newBoard.spaces[space1].xArray) === (newBoard.spaces[space3].xArray)) {
//       return true;
//     }
//   }
//   if (newGame.turnCounter === 9) {
//     return "Cats Game!";
//   } else {
//     return false;
//   }
// }


$(document).ready(function() {
  $(".boxes").click(function(event) {  // X
    // debugger;
    var boxNum = $(this).attr("id");
    if (turn % 2 !== 0 ) {
      $("#" + boxNum).prepend(displayX)
      xArray.push(boxNum);
      console.log(xArray);
    } else if(turn % 2 == 0 ) {
      $("#" + boxNum).prepend(displayO)
      oArray.push(boxNum);
      console.log(oArray)
    } else {
      alert("OHNOOO");
    }
    // checkWinnerX();
    // checkWinnerO();
    checker(xArray);
    checker(oArray);

    turn++;
    $(".scoreX").text(xWin);
    $(".scoreO").text(oWin);
    event.preventDefault();
  });
});
