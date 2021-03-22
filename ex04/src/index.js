function sumFibonacci(num) {
if (num <= 0) {
return 0;
}
if (num === 1) {
return 1;
}


var broj = 0;
var sljedecibroj = 1;
var res = 0;
   
    while (broj  <= num) {

      if (broj  % 2 !== 0) {
        res = res + broj;
      }
      broj = broj + sljedecibroj;
      sljedecibroj = broj - sljedecibroj;
    }
  
    return res;
  }

  console.log(sumFibonacci(1));
  console.log(sumFibonacci(10));
  console.log(sumFibonacci(20));
  console.log(sumFibonacci(4));
  console.log(sumFibonacci(-5));
  module.exports = sumFibonacci;
