// __tests__/math.test.js

const { add } = require('../index');

test('add function adds two numbers', () => {
  expect(add(1, 2)).toBe(3);
});

test('add function adds negative numbers', () => {
  expect(add(-1, -2)).toBe(-3);
});

test('add function adds floating point numbers', () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});

