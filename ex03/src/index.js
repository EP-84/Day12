function rangeOfNumber(startN, endN) {
    if (startN === endN) { return [startN]        

    }      
    
    else if (startN > endN) {return ["The starting number will always be less than or equal to the ending number"]}
    
    
    
    else {
        
        const countArry = rangeOfNumber(startN, endN - 1)  
        countArry.push(endN);
        return countArry;
        
      
    }
}

console.log(rangeOfNumber(1, 7));
console.log(rangeOfNumber(3, 10));
console.log(rangeOfNumber(5, 5));
console.log(rangeOfNumber(7, 5));
module.exports = rangeOfNumber;