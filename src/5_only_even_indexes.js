module.exports = evenIndexes;

function evenIndexes (word) {
  let arr = [ ];
  for (let i = 0; i < word.length; i+=2) {
   arr.push(word[i]);
    }
  return(arr);
  }

/**Weryfikacja */

function verify(input, goal) {
  if (input.toString() === goal.toString()) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}
verify(evenIndexes("lol"), [ 'l', 'l' ]);
verify(evenIndexes("You're weird"), [ 'Y', 'u', 'r', ' ', 'e', 'r' ]);
verify(evenIndexes(""), [ ]);