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