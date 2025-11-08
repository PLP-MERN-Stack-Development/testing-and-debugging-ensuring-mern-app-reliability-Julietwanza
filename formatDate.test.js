import { formatDate } from './formatDate';

test('formats valid date', () => {
  expect(formatDate('2020-01-02T00:00:00Z')).toMatch(/\d/);
});

test('returns empty for invalid date', () => {
  expect(formatDate('abc')).toBe('');
});
