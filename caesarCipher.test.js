import caesarCipher from "./caesarCipher";

test('Caesar Cipher with positive shift', () => {
    expect(caesarCipher('abc', 2)).toBe('cde');
});

test('Caesar Cipher with negative shift', () => {
    expect(caesarCipher('cde', -2)).toBe('abc');
});

test('Caesar Cipher wraps around alphabet', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Caesar Cipher maintains case', () => {
    expect(caesarCipher('AbC', 2)).toBe('CdE');
});

test('Caesar Cipher ignores non-alphabetic characters', () => {
    expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
});

test('Caesar Cipher with zero shift returns original string', () => {
    expect(caesarCipher('No Change', 0)).toBe('No Change');
});

test('Caesar Cipher with large positive shift', () => {
    expect(caesarCipher('abc', 29)).toBe('def'); // 29 % 26 = 3
});

test('Caesar Cipher with large negative shift', () => {
    expect(caesarCipher('def', -29)).toBe('abc'); // -29 % 26 = -3
});

test('Caesar Cipher with empty string', () => {
    expect(caesarCipher('', 5)).toBe('');  
});

test('Caesar Cipher with full rotation', () => {
    expect(caesarCipher('Rotate', 26)).toBe('Rotate');
});

test('Caesar Cipher with mixed content', () => {
    expect(caesarCipher('123 ABC xyz!', 4)).toBe('123 EFG bcd!');
}); 