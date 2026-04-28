const { soma, subtrai, multiplica, divide } = require('./math');

test('soma 2 + 3 = 5', () => {
  expect(soma(2, 3)).toBe(5);
});

test('subtrai 5 - 3 = 2', () => {
  expect(subtrai(5, 3)).toBe(2);
});

test('multiplica 2 * 3 = 6', () => {
  expect(multiplica(2, 3)).toBe(6);
});

test('divide 6 / 2 = 3', () => {
  expect(divide(6, 2)).toBe(3);
});

test('divide por zero retorna null', () => {
  expect(divide(5, 0)).toBe(null);
});
