module.exports = function removeDouble (inputArr) {
  let singleWordsArr = [...new Set(inputArr)];
  
  return (singleWordsArr);
  
  }
  removeDouble(["suit", "clock", "butter", "suit"]);
  // [ 'clock', 'butter', 'suit' ] 

/**Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(removeDouble(["suit", "clock", "butter", "suit"]), [ 'clock', 'butter', 'suit' ]);
verify(removeDouble(["hello", "hello", 23, -3, 23, "hello"]), [ -3, 23, 'hello' ]);
