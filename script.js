let arr = new Array(7);
let max = 100;
let min = -100;

function fillArray(array, min, max) {
  for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(array);
}

function replaceFromArray (array) {
	for (let i = 0; i < array.length; i++) {
    if ( array[i] < 0 ) array[i] = 0;
  }
  console.log(array);
}

function addToArray(array) {
	for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0 && array[i] === 0) {
      array.splice( i + 1, 0, -1)
    }
  }
  console.log(array);
}

fillArray(arr, min, max)
replaceFromArray(arr)
addToArray(arr)