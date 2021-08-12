// Write unit tests for getTokenFromHeader.
// Write at least two unit
// tests to ensure that that use case is always supported.
import getTokenFromHeader from '../get-token-from-header';

test('returns null when authorization does not exist', () => {
  const req = {headers: {}, body: {}};

  const res = getTokenFromHeader(req);

  expect(res).toBeNull();
});

test('returns token when authorization exists', () => {
  const req = {
    headers: {
      authorization: 'Token blahblahblahblah.blahblahblah.blahblahblah',
    },
    body: {},
  };
  const expected = req.headers.authorization.split(' ')[1];

  const res = getTokenFromHeader(req);

  expect(res).not.toBe(expected);
});
