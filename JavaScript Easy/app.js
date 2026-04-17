function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("abc"));

function convertToZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

console.log(convertToZeros([5, 100, 0]));

function removeApples(arr) {
 return arr.filter(elem => elem !== 'Apple')
}

console.log(removeApples(["Banana", "Apple", "Orange", "Apple"]));

function filterOutFalsy(arr) {
   return arr.filter(elem => !!elem === true);
}

console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]));

function convertToBoolean(arr) {
   return arr.map(elem => !!elem);
}

console.log(convertToBoolean([500, 0, "David", "", []]));