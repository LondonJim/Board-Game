describe("Game", () => {

  beforeEach(() => {
    let mockPlayer = {}
    game = new Game(mockPlayer)
  })

  it('should be move a random number from 1 to 6', () => {
    expect(game.roll()).toBeGreaterThan(0)
    expect(game.roll()).toBeLessThan(7)
  })

})
