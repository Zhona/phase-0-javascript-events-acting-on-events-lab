// Your code here
/*
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "pink"

dodger.style.bottom = "200px"

const board = document.getElementById("game")
board.style.backgroundColor = "lavender"
*/
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });



  function moveDodgerRight() {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
    
      
      if (left > 0) {
        dodger.style.left = `${left + 1}px`;
      }
    }
  
