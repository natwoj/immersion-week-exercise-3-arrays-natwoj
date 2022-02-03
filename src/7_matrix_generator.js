module.exports = function matrixGen() {
  // TODO Implement me.
};

/**Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(matrixGen(1,5), [ [ 1, 2, 3, 4, 5 ] ]);
verify(matrixGen(5,4), [
  [1, 2, 3, 4],
  [2, 4, 6, 8],
  [3, 6, 9, 12],
  [4, 8, 12, 16],
  [5, 10, 15, 20],
]);
verify(matrixGen(3,6), [
  [1, 2, 3, 4, 5, 6],
  [2, 4, 6, 8, 10, 12],
  [3, 6, 9, 12, 15, 18],
]);
verify(matrixGen(0,0), []);