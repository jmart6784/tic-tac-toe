let game = (() => {
  

  let board = [
    ["X", "O", "X"],
    ["O", "X",  "0"],
    ["X", "O", "X"]
  ];

  let reset = () => {
    board = [
      ["-", "-", "-"],
      ["-", "-",  "-"],
      ["-", "-", "-"]
    ];
  };

  return {
    board,
    reset
  };
})();