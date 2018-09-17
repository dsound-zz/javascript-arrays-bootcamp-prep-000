<<<<<<< HEAD
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
  }
function destructivelyAddElementToBeginningOfArray(array, element) {
 array.unshift(element);
 return array; 
}
function addElementToEndOfArray(array, element) {
  return [...array, element]; 
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
function accessElementInArray(array, index) {
  return array[index]
} 
function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element);
  return array 
}
function removeElementFromBeginningOfArray(array, element) {
  arrays = array.slice(1);
  return arrays
}
function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop(element);
  return array 
}
function removeElementFromEndOfArray(array, element) {
  arrays = array.slice(0, array.length - 1);
  return arrays
}











=======
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittlesE'];

function addElementToBeginningOfArray(array, el) {
  var newArray = [el, ...array];
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, el) {
array.unshift(el);
 return array
 
}
function addElementToEndOfArray(array, element) {
  var changeArray = [...array, element];
  return changeArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array
}
  
function removeElementFromBeginningOfArray(array) {
   var newSlice = array.slice(0);
   return newSlice
 }
>>>>>>> 76a02c6e43679fc41e62ed7c0cbcf0d4d1778672
