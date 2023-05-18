const math = require('./../src/math');

test('adding 1 + 2 should equal 3', () => {
  const sumResult = math.sum(1, 2);

  expect(sumResult).toBe(3);
});

test('subtracting 2 - 1 should equal 1', () => {
  const subtractResult = math.subtract(2, 1);

  expect(subtractResult).toBe(1);
});

test('multiplying 2 x 2 should equal 4', () => {
  const multiplyResult = math.multiply(2, 2);

  expect(multiplyResult).toBe(4);
});

test('dividing 4 / 2 should equal 2', () => {
  const divideResult = math.divide(4, 2);

  expect(divideResult).toBe(2);
});