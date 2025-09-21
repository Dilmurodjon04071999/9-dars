



// forEach

// person.forEach((value) => {
//     value.name = "asdfgh";
// });
// console.log(person)

// let newPerson = person.map((value) => {
//     return (value.name = "sdfghjfghjsdfghj")
// })
// console.log(newPerson)



// Map

// Array.prototype.myMap = function(callback){
//     let newArr = [];
//     for(let i = 0; i < this.length; i++){
//         newArr.push(callback(this[i],i,this));
//     }
//     return newArr;
// }

// let arr = [1,2,3,4,5];
// let newArr = arr.myMap((value)=> value * 5);
// console.log(newArr);



// Filter

// Array.prototype.myFilter = function (callback) {
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//         newArr.push(this[i]);
//         }
//     }
//     return newArr;
// };
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.myFilter((value) => value % 2 === 0);
// console.log(newArr);




// Some

// Array.prototype.mySome = function(callback){
//     for(let i = 0; i < this.length; i++){
//         if(callback(this[i],i,this)){
//             return true;
//         }
//     }
//     return false;
// }
// let arr = [1,2,3,4,5];
// let newArr = arr.mySome((value)=> value % 2 === 0);
// console.log(newArr);




// Reduce

// Array.prototype.myReduce = function (callback, initialValue) {
//     let acc = initialValue || this[0]; 
//     let start = initialValue ? 0 : 1;  

//     for (let i = start; i < this.length; i++) {
//         acc = callback(acc, this[i]); 
//     }

//     return acc;
// };

// let arr = [1, 2, 3, 4, 5];
// let sum = arr.myReduce((acc, val) => acc + val, 0);
// console.log(sum); 


// 5) Every

// Array.prototype.myEvery = function(callback){
//     for(let i = 0; i < this.length; i++){
//         if(!callback(this[i], i, this)){  
//             return false;   
//         }
//     }
//     return true;  
// }

// let arr = [1, 2, 3, -2, 5];
// let newArr = arr.myEvery((value)=> value > 0);
// console.log(newArr); 




// 6) Find

// Array.prototype.myFind = function(callback){
//     for(let i = 0; i < this.length; i++){
//         if(callback(this[i], i, this)){  
//             return this[i]; 
//         }
//     }
//     return undefined; 
// }

// let arr = [5, 12, 8, 130, 44];

// let found = arr.myFind((value) => value > 10);

// console.log(found); 







