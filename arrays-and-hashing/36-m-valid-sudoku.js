var isValidSudoku = function (board) {
  const columnsArr = [[], [], [], [], [], [], [], [], []];
  // check rows and columns
  for (let i = 0; i < 9; i++) {
    let dict = {};
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') continue;
      if (columnsArr[j].includes(board[i][j])) {
        return false;
      }
      columnsArr[j].push(board[i][j]);

      if (!dict.hasOwnProperty(board[i][j])) {
        dict[board[i][j]] = 1;
      } else {
        return false;
      }
    }
  }

  // check subgrids
  const length = 3;
  for (let startRow = 0; startRow < 9; startRow += length) {
    for (let startCol = 0; startCol < 9; startCol += length) {
      let subgridsArr = board
        .slice(startRow, startRow + length)
        .map((row) => row.slice(startCol, startCol + length))
        .flat()
        .filter((n) => n !== '.');
      if (subgridsArr.length !== new Set(subgridsArr).size) {
        return false;
      }
    }
  }

  return true;
};
