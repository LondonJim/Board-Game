# Board Game

Multiplayer board game where players move along a numbered board to reach the end, landing on certain places will push them forwards or backwards. The board is randomised each game.

Currently runs within console.

#### Instructions

Copy path of `index.html` in browser.

All commands currently on console.

Start Game (creates 'board' of 100 with randomised movements forward and backwards depending on where the player lands):

- `game = new Game`

Set number of players (example of 2 given):

- `game.numberOfPlayers(2)`

Play a round:

- `game.playTurn()`

Console output of player dice roll and details of movements.

Game continues until one player reaches 99.

#### Testing

`Jasmine 3.2.1`

Copy path of `SpecRunner.html` into browser to run tests
