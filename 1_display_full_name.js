
  
module.exports =  function displayFullName(string) {
  let stringToArray = string.split(" ");
  let lastElementinArray = stringToArray[stringToArray.length-1];
  
  if (stringToArray.length <= 2) {
  console.log("My name is " + lastElementinArray + ", " + stringToArray[0] + " " + lastElementinArray);
  }
  else {
    console.log("My name is " + lastElementinArray + ", " + string);
  }
  }

  displayFullName("James Bond");
  displayFullName("Salvador Felipe Jacinto Dalí");

 /* Weryfikacja 

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(displayFullName("James Bond"), "My name is Bond, James Bond");
verify(displayFullName("Ada Lovelace"), "My name is Lovelace, Ada Lovelace");
verify(displayFullName("Salvador Felipe Jacinto Dalí"), "My name is Dalí, Salvador Felipe Jacinto Dalí");

*/