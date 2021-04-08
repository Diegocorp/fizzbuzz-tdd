const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
    test('test working', () => {
        expect(true).toBe(true);
    })
    test('should print 1 when receive 1', () => {
        const expected = 1;
        const result = fizzbuzz(1);
        expect(expected).toBe(result);
    })
    test('should print fizz when receive a multiple of 3', () => {
        const expected = "fizz";
        const result = fizzbuzz(3);
        expect(expected).toBe(result);
    })
    test('should print fizz when receive a multiple of 5', () => {
        const expected = "buzz";
        const result = fizzbuzz(5);
        expect(expected).toBe(result);
    })
    test('should print fizzbuzz when receive a multiple of 3 and 5', () => {
        const expected = "fizzbuzz";
        const result = fizzbuzz(15);
        expect(expected).toBe(result);
    })
})