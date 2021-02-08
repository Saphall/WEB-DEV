const numbers = [1,-1, 2, 3, -4];

const filtered = numbers.filter(function (value) {  //filtering the values
return value>=0;
});
console.log(filtered);


const flt = numbers.filter(n => n>=0);   //similar to array literals clearner wat
console.log(flt);
