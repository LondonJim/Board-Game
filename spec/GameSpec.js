describe("Game", () => {

  beforeEach(() => {
    const mockCreatePlayer = () => {}
    game = new Game(mockCreatePlayer)
  })

  describe("#roll", () => {
    it('should be move a random number from 1 to 6', () => {
      expect(game.roll()).toBeGreaterThan(0)
      expect(game.roll()).toBeLessThan(7)
    })
  })

  describe('#createBoard', () => {
    it('jumping numbers should be between -10 and 10', () => {
      let isCreateBoardJumps
      gameBoard = game.board
      for(let row=0; row < gameBoard.length -1; row++) {
        for(let col=0; col < gameBoard[row].length - 1; col++) {
          if (gameBoard[row][col] > 10 || gameBoard[row][col] < -10) {
            isCreateBoardJumps = false
          }
        }
      }
      expect(isCreateBoardJumps).not.toEqual(false)
    })

    it('create a 100 place game board', () => {
      gameBoard = game.board
      expect(gameBoard.length).toEqual(100)
    })
  })

  describe('#numberOfPlayers', () => {
    it('creates player objects based on number entered', () => {
      game.numberOfPlayers(2)
      expect(game.players.length).toEqual(2)
    })
  })

  describe('#playTurn', () => {
    beforeEach(() => {
      const mockBoard = [0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, 0]
      const mockCreatePlayer = () => {}
      game = new Game(mockCreatePlayer, mockBoard)
    })

    it('automates the position of players based on landing on a negative movement', () => {
      game.numberOfPlayers(1)
      spyOn(game,'roll').and.returnValue(2) // lands on a -1 on board
      expect(game.playTurn()).toEqual([1])
    })

    it('automates the position of players based on landing on a positive movement', () => {
      game.numberOfPlayers(1)
      spyOn(game,'roll').and.returnValue(4) // lands on a +4 on board
      expect(game.playTurn()).toEqual([8])
    })

    it('sets player position to 0 of movement takes position below 0', () => {
      const mockBoard = [0, 1, -1, 0, -8, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, 0]
      const mockCreatePlayer = () => {}
      game = new Game(mockCreatePlayer, mockBoard)
      game.numberOfPlayers(1)
      spyOn(game,'roll').and.returnValue(4) // lands on a -8 on board in 4th position
      expect(game.playTurn()).toEqual([0])
    })

    it('returns player wins', () => {
      const mockBoard = [0, 1, -1, 0, -8, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 0, -6,
                         0, 1, -1, 0, 4, 0, 2, -2, 4, 0]
      const mockCreatePlayer = () => {}
      game = new Game(mockCreatePlayer, mockBoard)
      game.numberOfPlayers(1)
      game.players[0][1] = 95
      spyOn(game,'roll').and.returnValue(5)
      expect(game.playTurn()).toEqual('Player 1 wins!')
    })
  })

})
