// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$('#shoot').click(function() {
  let inputValue = $('#input').val()
  //console.log(inputValue)
  $('#userChoice').text(inputValue)

  let botval = Math.random();
  if (botval > .66) {
      $('#computerChoice').text('Rock')
  }
  else if (botval > .33) {
      $('#computerChoice').text('Paper')
  }
  else if (botval > 0) {
      $('#computerChoice').text('Scissors')
  }
  $('#botval').text(result)

  if ((userChoice === "Scissors" && computerChoice === "Paper") ||
   (userChoice === "Paper" && computerChoice === "Rock") ||
   (userChoice === "Rock" && computerChoice === "Scissors")){
    alert("Winner!");
}

   else if (userChoice === computerChoice){
    alert("A Tie!");
}
    else {
        alert("You Lost")
    }
  

    
})

//   else if (userChoice == "Paper" && botval == "Rock")
//     alert("Winner!");
//   else if (userChoice == "Rock" && botval == "Scissors")
//     alert("Winner!");

//   else if (userChoice == "Scissors" && botval == "Scissors")
//     alert("A Tie");
//   else if (userChoice == "Paper" && botval == "Paper")
//     alert("A Tie!");
