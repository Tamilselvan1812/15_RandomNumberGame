let guessnumber = document.getElementById("guessnumber");            //selecting input ,result,score
  let result = document.getElementById("result");
  let score = document.getElementById("score");
  let randomNumber = Math.floor(Math.random() * 10) + 1;              //math.random = 0.0 to 0.9 ,math.floor = 1.9 it changes to 1
  let totalscore = 10;

  function check() {
    let enterednumber = guessnumber.value;

    if (totalscore > 0) 
    {
      if (randomNumber == enterednumber) {
        result.textContent = "🎉 Right! You guessed it!";
        result.style.color = "#4CAF50";
        alert("You Won! 🎊");
                                                             
      } 
      else {
        totalscore=totalscore-1
        score.textContent = "Score: " + totalscore;
        result.textContent = "❌ Wrong! Try again.";
        result.style.color = "#e91e63";

        if (totalscore === 0) {
          result.textContent = "💀 Game Over!";
          result.style.color = "black";


        }
      }
    }
  }