class Controller {

  constructor(game = new Game) {
    this.game = game
    this.enterPlayers()
  }

  enterPlayers() {
    document.getElementById('submit-players').addEventListener('submit', function(e) {
      e.preventDefault()
      let players = document.getElementById('players').value
      this.game.numberOfPlayers(players)
      document.getElementById('submit-players').style.display = 'none'
    }.bind(this))
  }
}
