function myCounter(n) {
    if (n < 1) {
        return [];
    } else {

const countArry = myCounter(n - 1);
countArry.unshift(n);
return countArry;
    }
   
}

console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));
module.exports = myCounter;