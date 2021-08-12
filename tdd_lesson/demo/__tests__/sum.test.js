// Use cases
// sum() -> 0
// sum(5) -> 5
// sum(4, 5, 6) -> 15
import sum from '../sum';

test('returns 0 when called without arguments', () => {
  const expected = 0;

  const res = sum();

  expect(res).toBe(expected);
});

test('when passed one argument returns that argument', () => {
  const a = 5;
  const expected = 5;

  const res = sum(a);

  expect(res).toBe(expected);
});

test('returns the sum of arguments (2 or more args)', () => {
  const a = 4;
  const b = 5;
  const c = 6;
  const expected = 15;

  const res = sum(a, b, c);

  expect(res).toBe(expected);
});
