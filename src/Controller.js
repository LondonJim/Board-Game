class Controller {

  constructor(game = new Game) {
    this.game = game
    this.enterPlayers()
    this.displayBoard()
  }

  enterPlayers() {
    document.getElementById('submit-players').addEventListener('submit', function(e) {
      e.preventDefault()
      let players = document.getElementById('players').value
      this.game.numberOfPlayers(players)
      document.getElementById('submit-players').style.display = 'none'
    }.bind(this))
  }

  displayBoard() {
    for(let place = 0; place < this.game.board.length; place++) {
      let cell = document.getElementById("cell" + place)
      cell.style.fontSize = "15px"
      cell.innerHTML = `${place}/${this.game.board[place]}`
    }
  }
}
