class Game {

  constructor(createPlayer = () => {return new Player}, board = this.createBoard()) {
    this.createPlayer = createPlayer
    this.players = []
    this.board = board
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
    board[99] = 0 // land on 99 to win
    return board
  }

  jumpPlace() {
    return (Math.floor(Math.random()*20) - 10)
  }

  numberOfPlayers(num) {
    for (let i=0; i < num; i++) {
       this.players[i] = [this.createPlayer(), 0]
    }
  }

  playTurn() {
    this.players.forEach((player, index) => {
      let roll = this.roll()
      console.log(`Player ${index + 1} rolls a ${roll}`)
      this.players[index][1] = this.checkPosition(this.players[index][1] + roll)
      this.board[this.players[index][1]]
      console.log(`and lands on ${this.players[index][1]}`)
      console.log(`which has an additional movement of ${this.board[this.players[index][1]]}`)
      this.players[index][1] = this.checkPosition(this.players[index][1] + this.board[this.players[index][1]])
      console.log(`new position is: ${this.players[index][1]}`)
    })

    let playerPositions = this.players.map(playerPosition => playerPosition[1])
    return playerPositions.includes(99) ?
      `Player ${playerPositions.indexOf(99) + 1} wins!` : playerPositions
  }

  checkPosition(position) {
    console.log(position)
    if (position < 0) {
      return 0
    } else if (position > 99) {
      return 99
    } else {
      return position
    }
  }
}
