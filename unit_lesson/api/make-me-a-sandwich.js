export default function makeMeASandwich(req) {
  if (!req.query.sandwich) return null;
  return req.query.sandwich;
}
