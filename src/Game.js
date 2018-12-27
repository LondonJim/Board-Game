class Game {

  constructor(player = new Player) {
    this.player = player
    this.board = this.createBoard()
  }

  roll() {
    return (Math.floor(Math.random()*6)+1)
  }

  createBoard() {
    let board = []
    for (let place=0; place < 100; place++) {
      if ((Math.floor(Math.random()*5)) === 1) {
        board.push(this.jumpPlace())
      } else {
        board.push(0)
      }
    }
    return board
  }

  jumpPlace() {
    return (Math.floor(Math.random()*20) - 10)
  }
}
