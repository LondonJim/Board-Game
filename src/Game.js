class Game {

  constructor(player = new Player) {
    this.player = player
    this.board = this.createBoard()
  }

  roll() {
    return (Math.floor(Math.random()*6)+1)
  }

  createBoard() {
    let board = [[],[],[],[],[],[],[],[],[],[]]
    for (let row=0; row < 10; row++) {
      for (let col=0; col < 10; col++) {
        if ((Math.floor(Math.random()*5)) === 1) {
          board[row].push(this.jumpPlace())
        } else {
          board[row].push(0)
        }
      }
    }
    return board
  }

  jumpPlace() {
    return (Math.floor(Math.random()*20) - 10)
  }
}
