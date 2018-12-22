class Game {

  constructor(player = new Player) {
    this.player = player
  }

  roll() {
    return (Math.floor(Math.random()*6)+1)
  }
}
