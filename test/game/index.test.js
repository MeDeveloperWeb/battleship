import {
	addPlayers,
	getGameFormat,
	getPlayers,
	resetPlayers,
	setGameFormat
} from '../../src/game';
import Player from '../../src/game/player';

describe('Can Add Players', () => {
	it('should throw error if no player given', () => {
		expect(() => {
			addPlayers();
		}).toThrow('Invalid Player!');
	});

	it('should throw error if invalid player given', () => {
		expect(() => {
			addPlayers({ name: 'John' });
		}).toThrow('Invalid Player!');
	});

	it('should add player if correct player given and return number of players', () => {
		const john = new Player('john');
		expect(addPlayers(john)).toBe(1);

		expect(getPlayers()).toContain(john);

		const wick = new Player('wick');
		expect(addPlayers(wick)).toBe(2);

		expect(getPlayers()).toContain(wick);
	});

	it('should throw error if more than two Players', () => {
		expect(() => {
			const john = new Player('john');
			addPlayers(john);
		}).toThrow('Maximum number of players reached!');
	});

	it('should be able to remove all players', () => {
		resetPlayers();
		expect(getPlayers().length).toBe(0);
	});
});

describe('Can set game format', () => {
	it('should throw error on wrong format', () => {
		expect(() => {
			setGameFormat('das');
		}).toThrow('Invalid Game Format!');
	});

	it('should set game format if correct argument given', () => {
		setGameFormat('pvp');
		expect(getGameFormat()).toBe('pvp');

		setGameFormat('pvc');
		expect(getGameFormat()).toBe('pvc');
	});
});
