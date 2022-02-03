module.exports = function replaceArray() {
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

verify(replaceArray(["banana", "suit", "hammer"]), [ 'banana', 'suit', 'HAMMER' ]);
verify(replaceArray(["Hello", "there"]), [ 'HELLO', 'there' ]);
verify(replaceArray(["Hey!", "hey..."]), [ 'HEY!', 'HEY...' ]);