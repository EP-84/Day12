function myPetsFunction(pets) {
        
    return pets;
}

var myPetsArray = [
{ 
     animalType: "Dog",
     name: "Pujdo", 
},
{ 
    animalType: "Cat",
    name: "Maca",  
},
    
{ 
    animalType: "Bird",
    name: "Tweety",   
   
}
];

myPetsArray[1].name[0];


   
console.log(myPetsFunction(myPetsArray));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArry;