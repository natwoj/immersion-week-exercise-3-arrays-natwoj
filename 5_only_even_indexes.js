module.exports = function evenIndexes(input) {
    let output = [];
      
    for (let i=0; i<string.length; i++) {
        let evenIndex = string.split("");
      if (
      }
    }
    }
    evenIndexes("lol");
    evenIndexes("You're weird");
    evenIndexes("");
};

/**Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}
verify(evenIndexes("lol"), [ 'l', 'l' ]);
verify(evenIndexes("You're weird"), [ 'Y', 'u', 'r', ' ', 'e', 'r' ]);
verify(evenIndexes(""), [ ]);