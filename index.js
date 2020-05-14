
var inputSequence = [];
var sequence = [];
var rnum;

// start button even addEventListener

$(".btn").click(start);

// button click event listener

$(".gameButton").click(function() {
  var butin = this.textContent;
  console.log(a1(butin));
  var clickInput = a1(butin);
  inputSequence.push(clickInput);
  display(clickInput);
  checkers(sequence, inputSequence);
});

// keyboard input event listener

$(document).keydown(function(e) {
  console.log(e.key);
  var keyInput = a1(e.key);
  inputSequence.push(keyInput);
  display(keyInput);
  checkers(sequence, inputSequence);
});

// generates random pattern

function comp() {
  rnum = (Math.floor(Math.random() * 4)) + 1;
  sequence.push(rnum);
  console.log(sequence);
  var x = 0

  var flashTimer = setInterval(function() {

    if (x === sequence.length-1) {
      clearInterval(flashTimer);
    }
    display(sequence[x]);
    x++
  }, 250);
}

// takes random pattern array and displays visually

function display(key) {

  switch (key) {
    case 1:
      var red = $(".w");
  // create function for highlights
      red.addClass("highlight");
      setTimeout(function() {
        red.removeClass("highlight");
      }, 200);
      break;

    case 2:
      var blue = $(".e");
      blue.addClass("highlight");
      setTimeout(function() {
        blue.removeClass("highlight");
      }, 200);
      break;

    case 3:
      var yellow = $(".s");
      yellow.addClass("highlight");
      setTimeout(function() {
        yellow.removeClass("highlight");
      }, 200);
      break;

    case 4:
      var green = $(".d");
      green.addClass("highlight");
      setTimeout(function() {
        green.removeClass("highlight");
      }, 200);
      break;

    default:
      console.log(key);

  }
}

// converts click input to pattern array format

function a1(letter) {

  letter = letter.toUpperCase();

  switch (letter) {
    case "W":
      letter = 1;
      return (letter);
      break;

    case "E":
      letter = 2;
      return (letter);
      break;

    case "S":
      letter = 3;
      return (letter);
      break;

    case "D":
      letter = 4;
      return (letter);
      break;

    default:
      console.log("Not An Option");

  }
}


function start(){
  inputSequence.length = 0;
  sequence.length = 0;
  comp();
}

function checkers(cSeq, uSeq){
  var index = uSeq.length - 1;
  if (cSeq[index] === uSeq[index] ){
    console.log("correct");
    if (cSeq.length === uSeq.length){
      inputSequence.length = 0;
      setTimeout(function(){
               comp();
             }, 2000);
    }
  }
  else {
    alert("Game Over");
  }
}
