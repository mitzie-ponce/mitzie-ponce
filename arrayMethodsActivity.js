const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emi", "Tobias", "Linus"];
const combinedArr = arr1.concat(arr2);
console.log(combinedArr);

const favoriteNumbers = [1,2,3];
favoriteNumbers.unshift(4,5);
console.log(favoriteNumbers);

const fruits = ["Apple", "Banana", "Cherry"];
fruits.pop();
console.log(fruits);

const numbersArray = [1,2,3];
numbersArray.shift();
console.log(numbersArray);

fruits.sort();
console.log(fruits);

const slicedFruits = fruits.slice(0,1);
console.log(slicedFruits);

const months = ["January", "February", "March"];
months.splice(1, 1, "April", "May");
console.log(months); 

