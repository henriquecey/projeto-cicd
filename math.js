function soma(a, b) {
  return a + b;
}

function subtrai(a, b) {
  return a - b;
}

function multiplica(a, b) {
  return a * b;
}

function divide(a, b) {
  return b !== 0 ? a / b : null;
}

module.exports = { soma, subtrai, multiplica, divide };
