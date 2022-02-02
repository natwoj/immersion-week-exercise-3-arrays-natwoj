
  module.exports = 
  function averageMinMax(values) {
  let maxNum = Math.max(...values) + ".";
  let minNum = Math.min(...values) + ".";
  let average = 0;
    
   for (let i=0; i<values.length; i++) {
     average += values[i]/values.length;
      }
return ("Min: " + minNum + " Max: " + maxNum + " Average: " + Math.floor(average));
  }

/**Weryfikacja */
function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}
verify(averageMinMax([-42, 0, 42]), 'Min: -42. Max: 42. Average: 0');
verify(averageMinMax([30, 20, 100]), 'Min: 20. Max: 100. Average: 50');
verify(averageMinMax([-23, -4, -12]), 'Min: -23. Max: -4. Average: -13');