// Given a sorted array (arr) and a number (num), write some code that counts the occurrences of x in the array. Your code should work no matter what the value of num is.

const arr = [1,1,2,2,2,3,4,4,5,6,6]
const num = 2

// CODE HERE
let x = 0;

for (i = 0; i < arr.length; i++){
    if (arr[i] === num){
        x += 1
        
    }
}

console.log(x)