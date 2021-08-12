// You're going to develop a new utility function called `arrayify`
// using Test Driven Development!
// Requirements: accepts a single argument and returns an array
// of that argument. If the given argument is already an array,
// just return the argument. If it's given nothing, return an empty array.
//
// **Remember** to write a simple test to cover a simple use case. Then
// write code to make that test pass. Then refactor your code to clean
// it up if needed. Then continue the cycle until you cover all use cases.
// arrayify() -> []
// arrayify('hi') -> ['hi']
// arrayify([1, 2, 3]) -> [1, 2, 3]

import arrayify from '../arrayify';

test('returns an empty array if nothing was given', () => {
  const expected = [];

  const res = arrayify();

  expect(res).toEqual(expected);
});

test('accepts a single arg and retuns an array of that arg', () => {
  const arg = 'hi';
  const expected = ['hi'];

  const res = arrayify(arg);

  expect(res).toEqual(expected);
});

test('just returns an unchanged arg if it it an array', () => {
  const arg = [1, 3, 2];
  const expected = arg;

  const res = arrayify(arg);

  expect(res).toEqual(expected);
});
