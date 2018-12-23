describe("Game", () => {

  beforeEach(() => {
    let mockPlayer = {}
    game = new Game(mockPlayer)
  })

  describe("#roll", () => {
    it('should be move a random number from 1 to 6', () => {
      expect(game.roll()).toBeGreaterThan(0)
      expect(game.roll()).toBeLessThan(7)
    })
  })

  describe('#createBoard', () => {
    it('jumping numbers should be between -10 and 10', () => {
      let isCreateBoardJumps = true
      gameBoard = game.board
      for(let row=0; row < gameBoard.length -1; row++) {
        for(let col=0; col < gameBoard[row].length - 1; col++) {
          if (gameBoard[row][col] > 10 || gameBoard[row][col] < -10) {
            isCreateBoardJumps = false
          }
        }
      }
      expect(isCreateBoardJumps).toEqual(true)
    })

    it('create a 10x10 game board', () => {
      let isCreateBoard = true
      gameBoard = game.board
      if (gameBoard.length != 10) {
        isCreateBoard = false
      } else {
        for (let row=0; row < 10; row++) {
          if (gameBoard[row].length != 10) {
            isCreateBoard = false
          }
        }
      }

      expect(isCreateBoard).toEqual(true)
    })
  })

})
