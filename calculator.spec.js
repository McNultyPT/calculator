const { add } = require('./calculator.js');

describe('calculator.js', () => {
    test('can run the tests', () => {
        //assertion
        expect(true).toBe(true);
        //expect(actual value).matcher(expected value)
    });

    describe('add()', () => {
        it('should return 0 when called with no arguments', () => {
            const actual = add();

            expect(actual).toBe(0);
        });

        it('should return the sum of values provided', () => {
            expect(add(2)).toBe(2);
            expect(add(3)).toBe(3);
        });

        it('should return the passed value when only one argument is provided', () => {
            expect(add(2, 2)).toBe(4);
            expect(add(2, 3)).toBe(5);
        });

        it('should return the passed value when any number of arguments are provided', () => {
            expect(add(2, 2, 2)).toBe(6);
            expect(add(2, 3)).toBe(5);
            expect(add(2, 3, 3, 1)).toBe(9);
        });

        it('should handle an array of numbers', () => {
            expect(add([2, 2, 2])).toBe(6);
            expect(add([2, 3])).toBe(5);
        });

        it.skip('returns null if one of the arguments is not a number', () => {
            expect(add({})).toBeNull();
        });

        test.todo('todo');
    });
});

// have an add() method
// when called with no arguments, should return 0
// accepts 0, 1 or 2 arguments and returns the sum of them
// when passed a single value, should return the value passed
// support any number of arguments, example: add(1), add(3, 4, 5), add(5, 3)
// add support for an array of numbers

// what if we're passed objects, or NaN, or strings, undefined, null = {not numbers}
// returns null when one of the arguments is not a number