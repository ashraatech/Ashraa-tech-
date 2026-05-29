const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let min = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}

console.log(min);
