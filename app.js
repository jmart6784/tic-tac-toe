let Player = (name, piece, turn, score) => {
  let getName = () => name;
  let setName = (newName) => name = newName;
  let getPiece = () => piece;
  let getTurn = () => turn;
  let setTurn = (update) => turn = update;
  let getScore = () => score;
  let setScore = (update) => score = update;

  return {
    getName,
    setName,
    getPiece,
    getTurn,
    setTurn,
    getScore,
    setScore
  };
};

let player1 = Player("Player 1", "X", true, 0);
let player2 = Player("Player 2", "O", false, 0);

let game = (() => {
  // DOM board selection
  let a1 = document.getElementById("a1");
  let a2 = document.getElementById("a2");
  let a3 = document.getElementById("a3");

  let b1 = document.getElementById("b1");
  let b2 = document.getElementById("b2");
  let b3 = document.getElementById("b3");

  let c1 = document.getElementById("c1");
  let c2 = document.getElementById("c2");
  let c3 = document.getElementById("c3");

  let flash = document.getElementById("flash");
  let resetBtn = document.getElementById("reset");

  // DOM player info
  let player1Name = document.getElementById("p1-name");
  let p1Input = document.getElementById("p1-change");
  let p1Submit = document.getElementById("p1-submit");
  let p1Score = document.getElementById("p1-score");

  let player2Name = document.getElementById("p2-name");
  let p2Input = document.getElementById("p2-change");
  let p2Submit = document.getElementById("p2-submit");
  let p2Score = document.getElementById("p2-score");

  // Change Player name with form
  p1Submit.addEventListener("click", function() {
    if (p1Input.value === "" || !(p1Input.value.length <= 20)) {
      p1Input.value = "";
      flashMsg("error", "Name cannot exceed 20 characters or be Empty");
    } else {
      player1.setName(p1Input.value);
      player1Name.textContent = player1.getName();
      p1Input.value = "";
    };
  });

  p2Submit.addEventListener("click", function() {
    if (p2Input.value === "" || !(p2Input.value.length <= 20)) {
      p2Input.value = "";
      flashMsg("error", "Name cannot exceed 20 characters or be Empty");
    } else {
      player2.setName(p2Input.value);
      player2Name.textContent = player2.getName();
      p2Input.value = "";
    };
  });

  let start = () => {
    clickDom();
    render();
  };

  let render = () => {
    // Load Player name in DOM
    player1Name.textContent = player1.getName();
    player2Name.textContent = player2.getName();

    // Change color according to text content
    if (a1.textContent === "-") {
      a1.style.color = "black";
    } else {
      a1.style.color = "white";
    };
    
    if (a2.textContent === "-") {
      a2.style.color = "black";
    } else {
      a2.style.color = "white";
    };
    
    if (a3.textContent === "-") {
      a3.style.color = "black";
    } else {
      a3.style.color = "white";
    };

    if (b1.textContent === "-") {
      b1.style.color = "black";
    } else {
      b1.style.color = "white";
    };

    if (b2.textContent === "-") {
      b2.style.color = "black";
    } else {
      b2.style.color = "white";
    };

    if (b3.textContent === "-") {
      b3.style.color = "black";
    } else {
      b3.style.color = "white";
    };

    if (c1.textContent === "-") {
      c1.style.color = "black";
    } else {
      c1.style.color = "white";
    };

    if (c2.textContent === "-") {
      c2.style.color = "black";
    } else {
      c2.style.color = "white";
    };

    if (c3.textContent === "-") {
      c3.style.color = "black";
    } else {
      c3.style.color = "white";
    };
  };

  let flashMsg = (type, text) => {
    flash.textContent = text;

    if (type === "error") {
      flash.style.backgroundColor = "rgb(77, 3, 0)";

      setTimeout(function() {
        flash.style.display = "none";
      }, 3000);
    } else if (type === "success") {
      flash.style.backgroundColor = "rgb(0, 90, 0)";

      setTimeout(function() {
        flash.style.display = "none";
        reset();
      }, 3000);
    } else if (type === "draw") {
      flash.style.backgroundColor = "rgb(0, 65, 109)";

      setTimeout(function() {
        flash.style.display = "none";
        reset();
      }, 3000);
    };

    flash.style.display = "block";
  };

  let reset = () => {
    player1.setTurn(true);
    player2.setTurn(false);

    a1.textContent = "-";
    a2.textContent = "-";
    a3.textContent = "-";

    b1.textContent = "-";
    b2.textContent = "-";
    b3.textContent = "-";

    c1.textContent = "-";
    c2.textContent = "-";
    c3.textContent = "-";
    render();
  };

  // Reset all resets the score
  let resetAll = () => {
    player1.setScore(0);
    p1Score.textContent = player1.getScore();

    player2.setScore(0);
    p2Score.textContent = player2.getScore();
    
    reset();
  };

  resetBtn.addEventListener("click", resetAll);

  let turnInfo = () => {
    if (player1.getTurn() === true) {
      player1.setTurn(false);
      player2.setTurn(true);
      return player1.getPiece();
    } else if (player2.getTurn() === true) {
      player1.setTurn(true);
      player2.setTurn(false);
      return player2.getPiece();
    };
  };

  let clickDom = () => {
    // Board event listeners added
    a1.addEventListener("click", function() {
      if (a1.textContent === "-") {
        a1.textContent = turnInfo();
        render();
        checkGameOver();
      } else {
        flashMsg("error", "Space taken");
      };
    });

    a2.addEventListener("click", function() {
      if (a2.textContent === "-") {
        a2.textContent = turnInfo();
        render();
        checkGameOver();
      } else {
        flashMsg("error", "Space taken");
      };
    });

    a3.addEventListener("click", function() {
      if (a3.textContent === "-") {
        a3.textContent = turnInfo();
        render();
        checkGameOver();
      } else {
        flashMsg("error", "Space taken");
      };
    });

    b1.addEventListener("click", function() {
      if (b1.textContent === "-") {
        b1.textContent = turnInfo();
        render();
        checkGameOver();
      } else {
        flashMsg("error", "Space taken");
      };
    });

    b2.addEventListener("click", function() {
      if (b2.textContent === "-") {
        b2.textContent = turnInfo();
        render();
        checkGameOver();
      } else {
        flashMsg("error", "Space taken");
      };
    });

    b3.addEventListener("click", function() {
      if (b3.textContent === "-") {
        b3.textContent = turnInfo();
        render();
        checkGameOver();
      } else {
        flashMsg("error", "Space taken");
      };
    });

    c1.addEventListener("click", function() {
      if (c1.textContent === "-") {
        c1.textContent = turnInfo();
        render();
        checkGameOver();
      } else {
        flashMsg("error", "Space taken");
      };
    });

    c2.addEventListener("click", function() {
      if (c2.textContent === "-") {
        c2.textContent = turnInfo();
        render();
        checkGameOver();
      } else {
        flashMsg("error", "Space taken");
      };
    });

    c3.addEventListener("click", function() {
      if (c3.textContent === "-") {
        c3.textContent = turnInfo();
        render();
        checkGameOver();
      } else {
        flashMsg("error", "Space taken");
      };
    });
  };

  let addScore = (player) => {
    if (player === "player1") {
      let score = player1.setScore( player1.getScore() + 1 );
      p1Score.textContent = score;
    } else if (player === "player2") {
      let score = player2.setScore( player2.getScore() + 1 );
      p2Score.textContent = score;
    };
  };

  let checkGameOver = () => {
    // Horizontal Player 1 wins
    if (a1.textContent === "X" && a2.textContent === "X" && a3.textContent === "X") {
      addScore("player1");
      flashMsg("success", `${player1.getName()} wins the game!`);
    } else if (b1.textContent === "X" && b2.textContent === "X" && b3.textContent === "X") {
      addScore("player1");
      flashMsg("success", `${player1.getName()} wins the game!`);
    } else if (c1.textContent === "X" && c2.textContent === "X" && c3.textContent === "X") {
      addScore("player1");
      flashMsg("success", `${player1.getName()} wins the game!`);
    // Vertical Player 1 wins
    } else if (a1.textContent === "X" && b1.textContent === "X" && c1.textContent === "X") {
      addScore("player1");
      flashMsg("success", `${player1.getName()} wins the game!`);
    } else if (a2.textContent === "X" && b2.textContent === "X" && c2.textContent === "X") {
      addScore("player1");
      flashMsg("success", `${player1.getName()} wins the game!`);
    } else if (a3.textContent === "X" && b3.textContent === "X" && c3.textContent === "X") {
      addScore("player1");
      flashMsg("success", `${player1.getName()} wins the game!`);
    // Diagonal Player 1 wins
    } else if (a1.textContent === "X" && b2.textContent === "X" && c3.textContent === "X") {
      addScore("player1");
      flashMsg("success", `${player1.getName()} wins the game!`);
    } else if (a3.textContent === "X" && b2.textContent === "X" && c1.textContent === "X") {
      addScore("player1");
      flashMsg("success", `${player1.getName()} wins the game!`);
    // Horizontal Player 2 wins
    } else if (a1.textContent === "O" && a2.textContent === "O" && a3.textContent === "O") {
      addScore("player2");
      flashMsg("success", `${player2.getName()} wins the game!`);
    } else if (b1.textContent === "O" && b2.textContent === "O" && b3.textContent === "O") {
      addScore("player2");
      flashMsg("success", `${player2.getName()} wins the game!`);
    } else if (c1.textContent === "O" && c2.textContent === "O" && c3.textContent === "O") {
      addScore("player2");
      flashMsg("success", `${player2.getName()} wins the game!`);
    // Vertical Player 2 wins  
    } else if (a1.textContent === "O" && b1.textContent === "O" && c1.textContent === "O") {
      addScore("player2");
      flashMsg("success", `${player2.getName()} wins the game!`);
    } else if (a2.textContent === "O" && b2.textContent === "O" && c2.textContent === "O") {
      addScore("player2");
      flashMsg("success", `${player2.getName()} wins the game!`);
    } else if (a3.textContent === "O" && b3.textContent === "O" && c3.textContent === "O") {
      addScore("player2");
      flashMsg("success", `${player2.getName()} wins the game!`);
    // Diagonal Player 2 wins
    } else if (a1.textContent === "O" && b2.textContent === "O" && c3.textContent === "O") {
      addScore("player2");
      flashMsg("success", `${player2.getName()} wins the game!`);
    } else if (a3.textContent === "O" && b2.textContent === "O" && c1.textContent === "O") {
      addScore("player2");
      flashMsg("success", `${player2.getName()} wins the game!`);
    // Check for draw
    } else if (
      a1.textContent !== "-" &&
      a2.textContent !== "-" &&
      a3.textContent !== "-" &&
      b1.textContent !== "-" &&
      b2.textContent !== "-" &&
      b3.textContent !== "-" &&
      c1.textContent !== "-" &&
      c2.textContent !== "-" &&
      c3.textContent !== "-"
    ) {
      console.log("DRAW");
      flashMsg("draw", "It's a Draw!");
    };
  };

  return {
    start
  };
})();

game.start();