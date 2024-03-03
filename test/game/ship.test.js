import Ship from '../../src/game/ship';

describe('Ship Initialization', () => {
	describe('should throw Error on invalid arguments', () => {
		test('no length', () => {
			expect(() => {
				Ship();
			}).toThrow('Invalid Length!');
		});

		test('NaN length', () => {
			expect(() => {
				Ship('2');
			}).toThrow('Invalid Length!');
		});

		test('length == 0', () => {
			expect(() => {
				Ship(0);
			}).toThrow('Invalid Length!');
		});

		test('(-1) length < 0', () => {
			expect(() => {
				Ship(-1);
			}).toThrow('Invalid Length!');
		});

		test('(-4) length < 0', () => {
			expect(() => {
				Ship(-4);
			}).toThrow('Invalid Length!');
		});

		test('valid length but invalid name', () => {
			expect(() => {
				Ship(3, {});
			}).toThrow('Invalid Name!');
		});

		test('invalid length and invalid name', () => {
			expect(() => {
				Ship(0, {});
			}).toThrow();
		});
	});

	describe('should initialize ship on correct arguments', () => {
		test('length 4', () => {
			const ship = Ship(4);

			expect(ship).toHaveProperty('length', 4);
			expect(ship).toHaveProperty('name');
		});

		test('length 8 and name Godzilla', () => {
			const ship = Ship(8, 'Godzilla');

			expect(ship).toHaveProperty('length', 8);
			expect(ship).toHaveProperty('name', 'Godzilla');
		});
	});

	describe('Shoot Ship', () => {
		it('should be able to hit ship', () => {
			const ship = Ship(4);

			ship.hit();
			ship.hit();

			expect(ship).toHaveProperty('hits', 2);
			expect(ship.isSunk()).toBe(false);
		});

		it('should not sink ship if hits < length ', () => {
			const ship = Ship(4);

			ship.hit();
			ship.hit();

			expect(ship.isSunk()).toBe(false);
		});

		it('should be able to sunk ship', () => {
			const ship = Ship(4);

			for (let i = 0; i < 4; ++i) {
				ship.hit();
			}

			expect(ship.isSunk()).toBe(true);
		});
	});
});
