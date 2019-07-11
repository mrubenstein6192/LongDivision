  // get random values for problem
  var divisor = Math.floor(Math.random() * 10) + 1;
  var dividend = Math.floor(Math.random() * 1000) + 1;
  var quotient = "";
  var remainder = "";
  
  // break dividend into an array to use each digit separately
  const arr = Array.from(String(dividend), Number)
  console.log(arr);

  // prompt user to try first division
function firstCheck() {
  $("#messages").text("How many times does " + divisor + " divide into " + arr[0] + "? (Hint: 0 is a possible answer!)\n");

var c = $('<input>').attr('type','number').addClass('firstAnswer');

var b = $("<button>");
b.addClass('submit')
b.text("Check");

// $("#answer-box").append(r)
$("#answer-box").append(c)
$("#answer-box").append(b)
}

//on click function to take value from the yes or no buttons
function doesDivide() {
  var answer;

  console.log(arr[0]/divisor);

  $(document).on("click", ".submit", function() {
    console.log("this is clicked")
    answer = Math.floor(arr[0]/divisor)
    console.log(answer);

    var userAnswer = $(".firstAnswer").val();
    console.log(userAnswer);

    if (userAnswer == answer) {
      console.log("you are correct")
      $("#quotient").append(userAnswer);
      $("#error-message").text("That is correct!");
    }
    else {
      $("#error-message").append("Sorry, that is incorrect.  Try again!")
    }
  })
}

$(document).ready(function() {
 
  $("#divisor").text(divisor);
  $("#dividend").text(dividend);

// message to the user to see if divisor goes into first digit of dividend
firstCheck()
// renderButtons()
doesDivide()

  }
)


