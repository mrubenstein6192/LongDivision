$(document).ready(function () {
  
  $(document).on("click", ".calc", function () {
    $(".calculator").show();
    $(".calc").hide();

    var hideCalculator = $("<button>");
    hideCalculator.addClass('hideCalc').css("margin", "10px");;
    hideCalculator.text("Hide Calculator");
    $("#answer-box").append(hideCalculator)
    $(document).on("click", ".hideCalc", function () {
      $(".calculator").hide();
      $(".hideCalc").hide();
      $(".calc").show();
    })
  })
  $("#divisor").text(divisor);
  $("#dividend").text(dividend);
  $("#multiplied").hide()
  $("#difference").hide();
  $("#secondMult").hide();
  $("#secondDifference").hide()
  
  // message to the user to see if divisor goes into first digit of dividend
  firstCheck()
})

// get random values for problem
var divisor = Math.floor(Math.random() * 9) + 1;
var dividend = Math.floor(Math.random() * 899) + 100;
var quotient = "";
var remainder = "";

var firstInput = $('<input>').attr('type', 'number').addClass('firstAnswer').css("margin", "10px");
var secondInput = $('<input>').attr('type', 'number').addClass('secondAnswer').css("margin", "10px");
var thirdInput = $('<input>').attr('type', 'number').addClass('thirdAnswer').css("margin", "10px");
var fourthInput = $('<input>').attr('type', 'number').addClass('fourthAnswer').css("margin", "10px");
var fifthInput = $('<input>').attr('type', 'number').addClass('fifthAnswer').css("margin", "10px");
var sixthInput = $('<input>').attr('type', 'number').addClass('sixthAnswer').css("margin", "10px");
var seventhInput = $('<input>').attr('type', 'number').addClass('seventhAnswer').css("margin", "10px");
var eigthInput = $('<input>').attr('type', 'number').addClass('eigthAnswer').css("margin", "10px");
// var secondAnswer = $(".secondAnswer").val();
// var thirdAnswer = $(".thirdAnswer").val();
// var fourthAnswer = $(".fourthAnswer").val();

var b = $("<button>");
b.addClass('submit')
b.text("Submit");

var secondButton = $("<button>");
secondButton.addClass('submitTwo');
secondButton.text("Submit");

var thirdButton = $("<button>");
thirdButton.addClass('submitThree');
thirdButton.text("Submit")

var fourthButton = $("<button>");
fourthButton.addClass('submitFour');
fourthButton.text("Submit");

var fifthButton = $("<button>");
fifthButton.addClass('submitFive');
fifthButton.text("Submit");

var sixthButton = $("<button>");
sixthButton.addClass('submitSix');
sixthButton.text("Submit");

var seventhButton = $("<button>");
seventhButton.addClass('submitSeven');
seventhButton.text("Submit");

var eigthButton = $("<button>");
eigthButton.addClass('submitEight');
eigthButton.text("Submit");

var calcButton = $("<button>");
calcButton.addClass('calc').css("margin", "10px");
calcButton.text("Show Calculator")

// $("#answer-box").append(r)
$("#answer-box").append(firstInput);
$("#answer-box").append(b)
$("#answer-box").append(calcButton);


// break dividend into an array to use each digit separately
const arr = Array.from(String(dividend), Number)
console.log(arr);

// prompt user to try first division
function firstCheck() {
  $("#messages").text("How many times does " + divisor + " divide into " + arr[0] + "? (Hint: 0 is a possible answer!)\n");
  doesDivide();
}

function doesDivide() {
  var answer;

  console.log(arr[0] / divisor);

  $(document).on("click", ".submit", function () {
    console.log("this is clicked")

    answer = Math.floor(arr[0] / divisor)
    console.log(answer);

    var userAnswer = $(".firstAnswer").val();
    
      if (userAnswer == answer) {
       
        console.log("you are correct")
        $("#quotient").append(userAnswer);
        firstMultiply()
      } else {
        $("#error-message").text("Sorry, that is incorrect.  Try again!")
      }

    })
  }

function firstMultiply() {
  var userAnswer = $(".firstAnswer").val();
  if (userAnswer == 0) {
    $("#error-message").text("Since your first answer is 0, you can skip this step, but it's good practice for the routine of Long Division!")
  }
  else {
    $("#error-message").empty();
  }
  
  $("#messages").text("That is correct! Multiply: " + userAnswer + " x " + divisor + " = ?")
  
  var product = userAnswer * divisor;

  console.log(product);

  $("#answer-box").html(secondInput)
  $("#answer-box").append(secondButton)
  $("#answer-box").append(calcButton);

  $(document).on("click", ".submitTwo", function () {
    var userProduct = $(".secondAnswer").val();

    console.log(userProduct);
    var productInt = parseInt(userProduct, 10)
    console.log(productInt)

    if (product === productInt) {
      $("#error-message").empty();
      $("#messages").text("That is correct!")
      $("#multiplied").show()
      $("#multiplied").append(product);
      firstSubtraction();
    } else {
      $("#error-message").text("Sorry, that is incorrect.  Try again!")
    }

  })
}

function firstSubtraction() {
  $("#error-message").empty();
  var lastUserInput = $(".secondAnswer").val();
  console.log(lastUserInput);
  $("#messages").text("Correct! Now subtract: " + arr[0] + " - " + lastUserInput)
  $("#multiplied").text(lastUserInput);

  var difference = arr[0] - lastUserInput;
  console.log(difference);

  $("#answer-box").html(thirdInput)
  $("#answer-box").append(thirdButton)
  $("#answer-box").append(calcButton);

  $(document).on("click", ".submitThree", function () {
    var userProduct = $(".thirdAnswer").val();

    console.log(userProduct);
    var differenceInt = parseInt(userProduct, 10)
    console.log(differenceInt)

    if (difference === differenceInt) {
      $("#error-message").empty();
      $("#messages").text("That is correct! Bring down " + arr[1] + " and repeat!")
      $("#difference").show()
      $("#difference").append(difference);
      bringDown();
      function bringDown() {
        var newDiff = $(".thirdAnswer").val();
        console.log(newDiff);
        $("#multiplied").append("↓");
        $("#difference").append(arr[1]);
        var newDividendArr = [];
        var numberString = arr[1].toString();
        newDividendArr.push(newDiff, numberString);
        console.log(newDividendArr);
        var newDividendString = newDividendArr.toString().replace(",", "");;
        var newDividend = parseInt(newDividendString,10);
        console.log(newDividend);
        $("#error-message").append("How many times does " + divisor + " divide into " + newDividend + "?")
        $("#answer-box").html(fourthInput);
        $("#answer-box").append(fourthButton);
        $("#answer-box").append(calcButton);

        var newQuotientInt = parseInt(newDividend/divisor);
        console.log(newQuotientInt);
        $(document).on("click", ".submitFour", function() {
          var userNewQuotient = $(".fourthAnswer").val();
          var userNewQuotientInt = parseInt(userNewQuotient, 10)
          console.log(userNewQuotientInt);

          if (userNewQuotientInt == newQuotientInt) {
            $("#quotient").append(userNewQuotientInt);
            $("#messages").text("Correct! Now multiply " + userNewQuotientInt + " x " + divisor)
            $("#error-message").empty();
            $("#second-error-message").empty();
            $("#answer-box").html(fifthInput);
            $("#answer-box").append(fifthButton);
            $("#answer-box").append(calcButton);

            var secondProduct = divisor * userNewQuotientInt;
            console.log(secondProduct);

            $(document).on("click", ".submitFive", function() {
              var userSecondProduct = $(".fifthAnswer").val();
              if (userSecondProduct == secondProduct) {
                if (secondProduct > 9) {
                  $("#secondMult").show();
                  $("#secondMult").append(userSecondProduct);
                }
                else {
                $("#secondMult").show();
                $("#secondMult").append("&nbsp;&nbsp;" + userSecondProduct);
                }
                $("#messages").text("Awesome! Time to subtract again: " + newDividend + " - " + secondProduct);
                $("#error-message").empty();
                $("#second-error-message").empty();
                $("#answer-box").html(sixthInput);
                $("#answer-box").append(sixthButton);
                $("#answer-box").append(calcButton);

                var secondDifference = newDividend - secondProduct;
                console.log(secondDifference);

                $(document).on("click", ".submitSix", function() {
                  var userSecondDifference = $(".sixthAnswer").val();
                  if (userSecondDifference == secondDifference) {
                    $("#secondDifference").show();
                    $("#secondDifference").append("&nbsp;&nbsp;" + userSecondDifference);
                    $("#messages").text("You got this! Bring down " + arr[2] + " and repeat!")
                    $("#multiplied").append("↓");
                    $("#difference").append("↓");
                    $("#secondMult").append("↓")
                    $("#secondDifference").append(arr[2]);
                  }
                }) 
              }
            })
          }
          else {
            $("#second-error-message").text("Sorry, that is incorrect.  Try again!")
        }
      })
            // var thirdProduct = userNewQuotientInt * divisor;
            // var userThirdProduct = $(".fourthAnswer").val();
            
            // if (userThirdProduct == thirdProduct) {
            //   console.log("correct")
            // }

            // $("#secondMult").show();
            // $("#secondMult").append("&nbsp;&nbsp;" + userNewQuotientInt);
          }
        }
       
       else {
      $("#error-message").text("Sorry, that is incorrect.  Try again!")
    }

  })
  
}



