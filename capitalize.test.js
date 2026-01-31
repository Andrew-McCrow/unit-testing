import capitalize from "./capitalize";

test('capitalizes first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('returns empty string when given empty string', () => {
    expect(capitalize('')).toBe('');
});

test('capitalizes single letter', () => {
    expect(capitalize('a')).toBe('A');
});

test('does not change already capitalized word', () => {
    expect(capitalize('World')).toBe('World');
});

test('capitalizes first letter of sentence', () => {
    expect(capitalize('this is a test.')).toBe('This is a test.');
});

test('handles strings with leading spaces', () => {
    expect(capitalize('  leading spaces')).toBe('  leading spaces');
});

test('handles strings with punctuation', () => {
    expect(capitalize('!exclamation')).toBe('!exclamation');
});

test('handles non-alphabetic first character', () => {
    expect(capitalize('1st place')).toBe('1st place');
});