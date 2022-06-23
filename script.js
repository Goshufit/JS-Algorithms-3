// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// function addAll() {
//SOLUTION 1//
//The call() method calls a function with a given this value and arguments provided individually.
// let args = Array.prototype.slice.call(arguments);
// let total = 0;
// for (i = 0; i< args.length; i++) {
//     total += args[i];
// }
// return total;


//SOLUTION 2 ...rest & reduce/forEach//
//...rest will return the rest of the array excluding the first element in the parameter num represesnt the first number in the parameter and rest will convert the remaining numbers in the parameter to an array.
//Turns data sets into arrays so you can use array methods on them
// function addAll(...numbers) {
//     let total = 0;
//     numbers.forEach(num => {
//         total += num;
//     });
// }


//SOLUTION 2 - ...rest & reduce/forEach
// function addAll(...numbers) {
//     return numbers.reduce((acc, cur) => acc + cur);
// } 

// console.log(addAll(2, 5, 6, 7))

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

// function sumAllPrimes(num) {
//     let total = 0;

//     function checkForPrime(i) {
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }

//     for (let i = 2; i <= num; i++) {
//         if (checkForPrime(i)) {
//             total += i;
//         }
//     }
//     return total;
// }

// console.log(sumAllPrimes(10))

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']


//SOLUTION 1: ARGUMENTS, INDEXOF, FILTER
// function seekAndDestroy(arr) {
//     const args = Array.from(arguments);

//     function filterArr(arr) {
//         //Return true if not in array//
//         //The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. 
//         return args.indexOf(arr) === -1;
//     }
// //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// //Basically if the test comes back as true it will return the element in a new array
//     return arr.filter(filterArr);
//  }


//SOLUTION 2: ...rest'spread', filter() & includes()

// function seekAndDestroy(arr, ...rest) {
//     //The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. 
//     return arr.filter(val => !rest.includes(val))
// }

//  console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6))

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

// function sortByHeight(a) {
//     const arr1 = [];
//     const arr2 = [];

//     a.forEach((val, i) => {
//         if (val === -1) {
//             arr1.push(i);
//         } else {
//             arr2.push(val);
//         }
//     });

//     const sortArr = arr2.sort((a, b) => a - b)

//     arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

//     return sortArr;
// }



// const a = [-1, 150, 190, 170, -1, -1, 160, 180];
// console.log(sortByHeight(a))


// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

// function missingLetters(str) {
//     //The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index. 
//     //charCodeAt() gives you a number code that represents a letter
// let compare = str.charCodeAt(0);
// let missing;

//  str.split('').map((char, i) => {
//     if(str.charCodeAt(i) === compare) {
//         ++compare;
//     } else {
//         //The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units. 
//         missing = String.fromCharCode(compare);
//     }
//  });

//  return missing;
//  }

//  console.log(missingLetters('abd'))
// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
    let evenSum = 0;
    let oddSum = 0;

    arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));
    return [evenSum, oddSum];

 }

 console.log(evenOddSums([50, 60, 60, 45, 71]))