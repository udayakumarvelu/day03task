// 1 ) Do the below programs in anonymous function & IIFE
// Print odd numbers in an array
//anonymous function
var odd = function(arr){
    let result = [];
        for(var i = 0; i <= arr.length; i++){
            if(arr[i] % 2 !== 0){
                result.push(arr[i]);
            }
        }
    return result;
}
console.log(odd([10,11,12,13,15,17,18,19,20]));
//IIFE
// Immediately Invoked Function Execution!!
(function(arr){
    let result = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            result.push(arr[i]);
        }
    }
  return result;
})([12, 13, 14, 15, 16, 17, 18]);

//--------------------------------------------------------------//
// 2) Convert all the strings to title caps in a string array
////anonymous function
var caps = function(arr){
    let result = [];
        for(var i = 0; i < arr.length; i++){
            result.push(arr[i].toUpperCase());
        }
    return result;
}
console.log(caps(["Hello","world"]));
//IIFE
// Immediately Invoked Function Execution!!
(function(arr){
    let result = [];
        for(var i = 0; i < arr.length; i++){
            result.push(arr[i].toUpperCase());
        }
    return result;
})(["Hello","world"])

//--------------------------------------------------------------//
// 3) Sum of all numbers in an array
////anonymous function
var add = function(arr){
    let sum = 0;
        for(var i = 0; i < arr.length; i++){
           sum = sum + arr[i]; 
        }
    return sum;
}
console.log(add([11, 22, 33, 44, 55, 66, 77, 78, 89]));
//IIFE
// Immediately Invoked Function Execution!!
(function(arr){
    let sum = 0;
        for(var i = 0; i < arr.length; i++){
           sum = sum + arr[i]; 
        }
    return sum;
})([11, 22, 33, 44, 55, 66, 77, 78, 89])

//---------------------------------------------------------------------///
//4) Return all the prime numbers in an array
////anonymous function
var prime = function(arr) {
    let primeNumber = [];
    for (let i = 0; i < arr.length; i++) {
        let isPrime = true;
        if (arr[i] < 2) {
            continue;
        }
        for (let j = 2; j < arr[i]; j++) {
            if (arr[i] % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumber.push(arr[i]);
        }
    }
    return primeNumber;
}
console.log(prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 17]));

//IIFE
// Immediately Invoked Function Execution!!
(function(arr) {
    let primeNumber = [];
    for (let i = 0; i < arr.length; i++) {
        let isPrime = true;
        if (arr[i] < 2) {
            continue;
        }
        for (let j = 2; j < arr[i]; j++) {
            if (arr[i] % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumber.push(arr[i]);
        }
    }
    return primeNumber;
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 17]);

//-------------------------------******************--------------------------------------//
//----------- 5) Return all the palindromes in an array
////-------- anonymous function
var palindrome = function(arr) {
    let palindromes = [];
    for (let i = 0; i < arr.length; i++) {
       let str = String(arr[i]); 
       if (str === str.split('').reverse().join('')) {
            palindromes.push(arr[i]);
        }
    }
    return palindromes;
}
console.log(palindrome(["madam", 23, 131, 787, 15, 17, "level"]));
//IIFE
// Immediately Invoked Function Execution!!
(function(arr) {
    let palindromes = [];
    for (let i = 0; i < arr.length; i++) {
       let str = String(arr[i]); 
       if (str === str.split('').reverse().join('')) {
            palindromes.push(arr[i]);
        }
    }
    return palindromes;
})(["madam", 23, 131, 787, 15, 17, "level"]);

//-------------------**************************************------------------------------
//------- 6) Return median of two sorted arrays of the same size.
//-------- anonymous function
var medianOfTwoSortedArrays = function(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    
    let length = mergedArray.length;
    if (length % 2 === 0) {
        let mid = length / 2;
        let result = (mergedArray[mid - 1] + mergedArray[mid]) / 2;
        return result;
    } else {
        let mid = Math.floor(length / 2);
        return mergedArray[mid];
    }
}
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
console.log(medianOfTwoSortedArrays(arr1, arr2));

//IIFE
// Immediately Invoked Function Execution!!
(function(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    
    let length = mergedArray.length;
    if (length % 2 === 0) {
        let mid = length / 2;
        let result = (mergedArray[mid - 1] + mergedArray[mid]) / 2;
        console.log(result)
        return result;
    } else {
        let mid = Math.floor(length / 2);
        console.log(mid)
        return mergedArray[mid];
    }
})([1, 3, 5], [2, 4, 6]); // Output: 3.5

//-------------------**************************************------------------------------
//------- 7) Remove duplicates from an array
//-------- anonymous function
let removeDuplicates = function(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}
let arr = [1, 2, 3, 4, 2, 3, 5];
console.log(removeDuplicates(arr)); 
//IIFE
// Immediately Invoked Function Execution!!
(function(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
})([1, 2, 3, 4, 2, 3, 5]);// Output: [1, 2, 3, 4, 5]


//-------------------**************************************------------------------------
//------- 7) Rotate an array by k times
//-------- anonymous function
let rotateArray = function(arr, k) {
    if (arr.length === 0 || k <= 0) {
        return arr;
    }
    let rotations = k % arr.length;
    let rotatedArray = [];
    for (let i = 0; i < arr.length; i++) {
        let newIndex = (i + rotations) % arr.length;
        rotatedArray[newIndex] = arr[i];
    }
    return rotatedArray;
}
console.log(rotateArray([1, 2, 3, 4, 5], 4)); // Output: [4, 5, 1, 2, 3]
//IIFE
// Immediately Invoked Function Execution!!
(function(arr, k) {
    if (arr.length === 0 || k <= 0) {
        return arr;
    }
    let rotations = k % arr.length;
    let rotatedArray = [];
    for (let i = 0; i < arr.length; i++) {
        let newIndex = (i + rotations) % arr.length;
        rotatedArray[newIndex] = arr[i];
    }
    return rotatedArray;
})([1,2, 3, 5,6,7,8,9,4],4) // Output: [4, 5, 1, 2, 3]


////--------------------arrow Functions--------------------////
////odd Number 
/// 1.Print odd numbers in an array
var odd = (arr) => {
    let result = [];
    for(var i = 0 ; i < arr.length ; i++){
     if(arr[i] % 2 !== 0){
         result.push(arr[i]);
     }
    }
    return result;
   }
 console.log(odd([1, 2, 3, 4, 5,7,9]));

 ////2.Convert all the strings to title caps in a string array
 var uppercase = (arr) => {
    let result = [];
    for(var i = 0 ; i < arr.length ; i++){
     result.push(arr[i].toUpperCase())
    }
    return result;
   }
 console.log(uppercase(["hello","world"]));

 ///// 3.Sum of all numbers in an array
 var sumofNumberinArray = (arr) => {
    let sum = 0;
    for(var i = 0 ; i < arr.length ; i++){
     sum = sum + arr[i];
    }
    return sum;
   }
 console.log(sumofNumberinArray([1,2,4,5,6,7,8,3,5,6]));

 /// 4.Return all the prime numbers in an array
 var primeNumber = (arr) => {
    let result = [];
    for(var i = 0 ; i < arr.length ; i++){
     var prime = true;
     if(arr[i] < 2){
       continue;
     }
     
     for(var j = 2 ; j < arr[i] ; j++){
      if(arr[i] % j === 0){
        prime = false;
        break;
      }
     }
     
     if(prime){
       result.push(arr[i]);
    }
  }
    return result;
  }
  console.log(primeNumber([1,2,4,5,6,7,8,3,5,6,11,13,15,17,16]));

//// 5.Return all the palindromes in an array
var palindrome = (arr) =>  {
    let palindromes = [];
    for (let i = 0; i < arr.length; i++) {
       let str = String(arr[i]); 
       if (str === str.split('').reverse().join('')) {
            palindromes.push(arr[i]);
        }
    }
    return palindromes;
}
console.log(palindrome(["madam", 23, 131, 787, 15, 17, "level"]));