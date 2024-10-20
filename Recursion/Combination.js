function getCombinations(arr) {
  const result = [];

  const generate = (combo, start) => {
      result.push(combo);
      for (let i = start; i < arr.length; i++) {
          generate(combo.concat(arr[i]), i + 1);
      }
  };

  generate([], 0);
  return result;
}

// Example usage
const array = [1, 2, 3];
const combinations = getCombinations(array);
console.log(combinations);