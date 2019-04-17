import Game from '../src/bowling-1';

function rollMany(game: Game, n: number, pins: number) {
  for (let i = 0; i < n; i += 1) {
    game.roll(pins);
  }
}

function rollSpare(game: Game) {
  game.roll(5);
  game.roll(5);
}

function rollStrike(game: Game) {
  game.roll(10);
}

describe('bowling1', () => {
  test('gutterGame', () => {
    const g = new Game();
    rollMany(g, 20, 0);
    expect(g.score()).toBe(0);
  });

  test('allOnes', () => {
    const g = new Game();
    rollMany(g, 20, 1);
    expect(g.score()).toBe(20);
  });

  test('oneSpare', () => {
    const g = new Game();
    rollSpare(g);
    g.roll(3);
    rollMany(g, 17, 0);
    expect(g.score()).toBe(16);
  });

  test('oneStrike', () => {
    const g = new Game();
    rollStrike(g);
    g.roll(3);
    g.roll(4);
    rollMany(g, 16, 0);
    expect(g.score()).toBe(24);
  });

  test('perfectGame', () => {
    const g = new Game();
    rollMany(g, 12, 10);
    expect(g.score()).toBe(300);
  });
});
