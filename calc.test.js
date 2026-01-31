import calc from './calc.js';

// tests
it('adds numbers', () => {
    expect(calc.add(1, 2)).toBe(3);
});

it('subtracts numbers', () => {
    expect(calc.subtract(5, 3)).toBe(2);
});

it('multiplies numbers', () => {
    expect(calc.multiply(4, 3)).toBe(12);
});

it('divides numbers', () => {
    expect(calc.divide(10, 2)).toBe(5);
});