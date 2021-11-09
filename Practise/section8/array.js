var fruits=["Apple","Mango","Cherry"];
console.log(fruits);
fruits.push("Orange");
console.log(fruits);
fruits.pop();
console.log(fruits);

//push - add elements at the end of the array

//pop - remove elements from the last of the array

//shift- delete the element from first of the array

//unshift- add element at the beginning of the array

var colors=["Red","Blue","Green","Pink"];
console.log(colors);
colors.shift();
console.log(colors);
colors.unshift("purple");
console.log(colors);

//change particular value in an array

colors[0]="Aqua";
console.log(colors);
colors[4]="Yellow";
console.log(colors);

//Splice and Slice

//Splice - delete the elements from the start value till the end value
var colors=["Red","Blue","Green","Pink"];
console.log(colors);
colors.splice(0,0,"Black");// add the elements at the given position
console.log(colors);

colors.splice(0,1);
console.log(colors);

 colors.splice(0,2,"Violet");//remove 2 elements and add Violet
 console.log(colors);

 // slice() returns selected elements in an array, as a new array.
 var colors=["Red","Blue","Green","Pink"];
 var newColors=colors.slice(3);

 console.log(newColors);