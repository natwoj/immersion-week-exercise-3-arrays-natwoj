module.exports = function replaceArray(arr) {
  let outputArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0].includes ("h") || arr[i][0].includes ("H")) {
     arr[i] = arr[i].toUpperCase();
     outputArr = arr;
    }
    return (outputArr);
  } 
}

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