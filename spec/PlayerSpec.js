describe("Player", () => {

  beforeEach(() => {
    player = new Player
  })

  it('create a player class object', () => {
    expect(player instanceof Player).toEqual(true)
  })

})
