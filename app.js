let Player = (name, piece, turn) => {
  let getName = () => name;
  let getPiece = () => piece;
  let getTurn = () => turn;

  let setTurn = (update) => turn = update;
  return {
    getName,
    getPiece,
    getTurn,
    setTurn
  };
};

let player1 = Player("Player1", "X", true);
let player2 = Player("Player2", "O", false);

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

  let start = () => {
    clickDom();
    render();
  };

  let render = () => {
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

  let board = [
    ["-", "-", "-"],
    ["-", "-",  "-"],
    ["-", "-", "-"]
  ];

  let reset = () => {
    board = [
      ["-", "-", "-"],
      ["-", "-",  "-"],
      ["-", "-", "-"]
    ];
  };

  let turnInfo = () => {
    if (player1.getTurn() === true) {
      console.log("PLAYER ONE'S TURN");

      player1.setTurn(false);
      player2.setTurn(true);

      return player1.getPiece();
    } else if (player2.getTurn() === true) {
      console.log("PLAYER TWO'S TURN");
      player1.setTurn(true);
      player2.setTurn(false);

      return player2.getPiece();
    } else {
      console.log("TURN ERROR");
    };
  };

  let clickDom = () => {
    // Board event listeners added
    a1.addEventListener("click", function() {
      a1.textContent = turnInfo();
      render();
    });

    a2.addEventListener("click", function() {
      a2.textContent = turnInfo();
      render();
    });

    a3.addEventListener("click", function() {
      a3.textContent = turnInfo();
      render();
    });

    b1.addEventListener("click", function() {
      b1.textContent = turnInfo();
      render();
    });

    b2.addEventListener("click", function() {
      b2.textContent = turnInfo();
      render();
    });

    b3.addEventListener("click", function() {
      b3.textContent = turnInfo();
      render();
    });

    c1.addEventListener("click", function() {
      c1.textContent = turnInfo();
      render();
    });

    c2.addEventListener("click", function() {
      c2.textContent = turnInfo();
      render();
    });

    c3.addEventListener("click", function() {
      c3.textContent = turnInfo();
      render();
    });
  };

  // let checkGameOver = () => {

  //   let winPositions = [

  //   ];
  // };

  return {
    start,
    board,
    reset,
    clickDom,
    // checkGameOver
  };
})();

game.start();