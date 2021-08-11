import makeMeASandwich from '../make-me-a-sandwich';

test('returns null when the sandwich does not exist', () => {
  const req = {query: {}};

  const res = makeMeASandwich(req);

  expect(res).toBeNull();
});

test('returns sandwich when the sandwich exists', () => {
  const req = {query: {sandwich: 'Denver Sandwich'}};
  const expected = req.query.sandwich;

  const res = makeMeASandwich(req);

  expect(res).toBe(expected);
});
