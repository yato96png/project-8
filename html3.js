function filterArray(array, filterFunction) {
  const result = [];
  for (const item of array) {
    if (filterFunction(item)) {
      result.push(item);
    }
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const isOdd = (num) => num % 2 !== 0;

console.log(filterArray(numbers, isOdd)); // [1, 3, 5]
