// #DEEP THINKING FROM STACK LERNER

// first problem solved
const evenNumber = (n) => {
    for (let i = 1; i <= n; i++){
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

console.log(evenNumber(100));


// 2nd problem before thinking
let total = 0;
const sum = (n, m) => {
    for (let i = n; i <= m; i++){
        total += i;
    }
}
console.log(sum(1, 5));



//2nd problem solved after some thinking
let summation = 0;
const totalSummation = (n, m) => {
    for (let i = n; i <= m; i++){
        summation += i;
}
}
totalSummation(10, 15)
console.log(summation)

//problem 3
//area of a triangle

const areaOfTriangle = (base, height) => {
    const area = (base * height) / 2;
    return area;
}
console.log(areaOfTriangle(4, 6));


//problem 4
//write a function that takes a ward and returns the new word without including the first 2 characters
//it was tricky for me because i don't have anu idea for using slice in string method;

/*
**** slice the word;
**** return the save part ok;
 */

const generateNewWord = (word) => {
    const newWord = word.slice(2);
    return newWord;
}
console.log(generateNewWord('samar'));


// 5th problem
//write a function that takes a array and returns the first and last element of the array ok


const newArray = (arr) => {
    const firstElement = arr[0];
    const lastElement = arr[arr.length - 1];
    return [firstElement, lastElement]
}

const array = ['sazzad', 200, 'tariq', 300, 'khalid'];

console.log(newArray(array));