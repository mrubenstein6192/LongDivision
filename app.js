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
  // message to the user to see if divisor goes into first digit of dividend
  firstCheck()
})

// get random values for problem
var divisor = Math.floor(Math.random() * 9) + 1;
var dividend = Math.floor(Math.random() * 9999) + 1;
var quotient = "";
var remainder = "";

var firstInput = $('<input>').attr('type', 'number').addClass('firstAnswer').css("margin", "10px");
var secondInput = $('<input>').attr('type', 'number').addClass('secondAnswer').css("margin", "10px");
var thirdInput = $('<input>').attr('type', 'number').addClass('thirdAnswer').css("margin", "10px");
var fourthInput = $('<input>').attr('type', 'number').addClass('fourthAnswer').css("margin", "10px");

var secondAnswer = $(".secondAnswer").val();
var thirdAnswer = $(".thirdAnswer").val();
var fourthAnswer = $(".fourthAnswer").val();

var b = $("<button>");
b.addClass('submit')
b.text("Submit");

var secondButton = $("<button>");
secondButton.addClass('submitTwo');
secondButton.text("Submit");

var thirdButton = $("<button>");
thirdButton.addClass('submit');
thirdButton.text("Submit")

var fourthButton = $("<button>");
fourthButton.addClass('submit');
fourthButton.text("Submit");

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
    // console.log(userAnswer);

    if (userAnswer && answer == 0) {
      $("#quotient").text("0")
      secondCheck();
    } else {
      if (userAnswer == answer) {
        console.log("you are correct")
        $("#quotient").append(userAnswer);
        firstMultiply()
        // $("#error-message").text("That is correct!")
      } else {
        $("#error-message").text("Sorry, that is incorrect.  Try again!")
      }

    }
  })
}

    function secondCheck() {
      var newArr = arr.slice(0, 2)
      console.log(newArr);

      var newString = newArr.toString().replace(",", "");
      console.log(newString);

      var newNumber = parseInt(newString, 10)
      console.log(newNumber)

      $("#messages").text("Great! So then how many times does " + divisor + " divide into " + newNumber + "? (Hint: 0 is a possible answer!)\n");

      doesDivideTwo()

      function doesDivideTwo() {
   
        console.log(newNumber / divisor);

        $(document).on("click", ".submit", function() {
          console.log("this is clicked")
          var answer = Math.floor(newNumber / divisor)
          console.log(answer);

          var userAnswer = $(".firstAnswer").val();
          console.log(userAnswer);
          var userAnswerInt = parseInt(userAnswer, 10)
          console.log(userAnswerInt);

          if (userAnswerInt === answer) {
            console.log("you are correct")
            $("#quotient").text("0" + userAnswerInt);
            $("#error-message").text("That is correct!");
            $("#messages").empty()
            firstMultiply()
          } else {
            $("#error-message").text("Sorry, that is incorrect.  Try again!")
          }
         
        })
      
    }

  }

function firstMultiply() {

  var userAnswer = $(".firstAnswer").val();
  $("#error-message").text("")
  $("#messages").text("That is correct! Multiply: " + userAnswer + " x " + divisor + " = ?")
  
  var product = userAnswer * divisor;

  console.log(product);


  // var secondInput = $('<input>').attr('type', 'number').addClass('secondAnswer').css("margin","10px");
  $("#answer-box").html(secondInput)
  $("#answer-box").append(secondButton)
  $("#answer-box").append(calcButton);

  $(document).on("click", ".submitTwo", function () {
    var userProduct = $(".secondAnswer").val();

    console.log(userProduct);
    var productInt = parseInt(userProduct, 10)
    console.log(productInt)

    if (product === productInt) {
      $("#messages").empty();
      $("#messages").text("That is correct!")
      $("#multiplied").show()
      $("#multiplied").append(product);
    } else {
      $("#messages").text("Sorry that is not correct.  Try")
    }

  })
}

// function doesMultiply() {
// var userAnswerTwo = $(".firstAnswer").val();
// $("#answer-box").html(secondInput)
// $("#answer-box").html(secondButton)
// $("#answer-box").append(calcButton);

// $(document).on("click", ".submitTwo", function (){

// var product = userAnswerTwo * divisor;
// var userProduct = $(".secondAnswer").val();
// console.log(userProduct);

// if (userProduct === product) {
//   $("#multiplied").show();
//   $("#multiplied").text(userProduct);
//     $("#error-message").text("That is correct!");
//   } else {
//     $("#error-message").text("Sorry, that is incorrect.  Try again!")
//   }
// })
// }