const program = require('commander');
var prompt = require('prompt');

let board = [
['tl','tm','tr'],
['ml','m','mr'],
['bl','bm','br',]
]

let winner = false
let currentPlayer = 'player1'
prompt.start();
let tl= board[0][0]
let ml= board[0][1]
let bl = board[0][2]
let tm = board[0][1]
let m = board[1][1]
let bm = board[2][1]
let tr = board[0][2]
let mr = board[1][2]
let br = board[2][2]
//while(!winner) {

  console.log(board.join('\n'))
  console.log(`your move ${currentPlayer}`)
  prompt.get('move', function (err, result) {
  let marker = currentPlayer === 'player1' ? 'X' : 'O'
  console.log(result.move)

});
//worlds longest if statement, but this just checks if any thing is 3 in a row to determine a winner
  if(board[0][0] === board[0][1] ===board[0][2] || board[0][0]===board[1][0]===board[2][0] || board[0][0]===board[1][1]===board[2][2]
     || board [0][1]===board[1][1]===board[2][1] || board[0][2]===board[1][2]===board[2][2] || board[1][0]===board[1][1]===board[1][2]
     || board[2][0]===board[2][1]===board[2][2]) {
      winner = currentPlayer
      //break
  }  
//}
