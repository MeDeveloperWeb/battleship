import initialization from "../../src/game";

test('Check project initialization', () => {
    expect(initialization()).toBe(true);
});