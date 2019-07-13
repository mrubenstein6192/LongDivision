  // get random values for problem
  var divisor = Math.floor(Math.random() * 9) + 1;
  var dividend = Math.floor(Math.random() * 9999) + 1;
  var quotient = "";
  var remainder = "";

  var c = $('<input>').attr('type', 'number').addClass('firstAnswer').css("margin","10px");

  var b = $("<button>");
  b.addClass('submit')
  b.text("Submit");

  var calcButton = $("<button>");
  calcButton.addClass('calc').css("margin","10px");
  calcButton.text("Show Calculator")

  // $("#answer-box").append(r)
  $("#answer-box").append(c)
  $("#answer-box").append(b)
  $("#answer-box").append(calcButton);



  // break dividend into an array to use each digit separately
  const arr = Array.from(String(dividend), Number)
  console.log(arr);

  // prompt user to try first division
  function firstCheck() {
    $("#messages").text("How many times does " + divisor + " divide into " + arr[0] + "? (Hint: 0 is a possible answer!)\n");

  }

  function doesDivide() {
    var answer;

    console.log(arr[0] / divisor);

    $(document).on("click", ".submit", function () {
      console.log("this is clicked")
      answer = Math.floor(arr[0] / divisor)
      console.log(answer);

      var userAnswer = $(".firstAnswer").val();
      console.log(userAnswer);
 
      if (userAnswer && answer == 0) {
        $("#quotient").text("0")
        secondCheck();
      }
      else {
        if (userAnswer == answer) {
        console.log("you are correct")
        $("#quotient").append(userAnswer);
        $("#error-message").text("That is correct!")
        // firstMultiply()
      } else {
        $("#error-message").text("Sorry, that is incorrect.  Try again!")
      }
      
    }


  function secondCheck() {
    var newArr = arr.slice(0,2)
    console.log(newArr);

    var newString = newArr.toString().replace(",","");
    console.log(newString);

    var newNumber = parseInt(newString, 10)
    console.log(newNumber)

    $("#messages").text("Great! So then how many times does " + divisor + " divide into " + newNumber + "? (Hint: 0 is a possible answer!)\n");

    doesDivideTwo()

    function doesDivideTwo() {
      var answer;
  
      console.log(newNumber / divisor);
  
      $(document).on("click", ".submit", function () {
        console.log("this is clicked")
        answer = Math.floor(newNumber / divisor)
        console.log(answer);
  
        var userAnswer = $(".firstAnswer").val();
        console.log(userAnswer);
   
          if (userAnswer == answer) {
          console.log("you are correct")
          $("#quotient").text("0" + userAnswer);
          $("#error-message").text("That is correct!");
        } else {
          $("#error-message").text("Sorry, that is incorrect.  Try again!")
        }
        // firstMultiply()
      })
    }
  }

  
    })
  }

  // function firstMultiply() {
  //   $("#error-message").empty();
  //   var userAnswerTwo = $(".firstAnswer").val();
    
  //   $("#messages").text("That is correct! \nMultiply: " + userAnswerTwo + " times " + divisor + ".")

  //   var product = userAnswerTwo * divisor;
  //   var userProduct = $(".firstAnswer").val();

  //   if (userProduct === product) {
  //     $("#dividend").append(userProduct);
  //       $("#error-message").text("That is correct!");
  //     } else {
  //       $("#error-message").text("Sorry, that is incorrect.  Try again!")
  //     }
  //   }
  

  $(document).ready(function () {
    $(document).on("click", ".calc", function () {
      $(".calculator").show();
      $(".calc").hide();

      var hideCalculator = $("<button>");
      hideCalculator.addClass('hideCalc').css("margin","10px");;
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

    // message to the user to see if divisor goes into first digit of dividend
    firstCheck()
    // renderButtons()
    doesDivide()

  })