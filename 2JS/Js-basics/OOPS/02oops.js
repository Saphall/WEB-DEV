//Procedural type
var baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWages(baseSalary,overtime,rate) {
  return baseSalary+(overtime*rate);
}


//Oops type
let employee={
//Encapsulation - reduce complexity and increase reusability
salary: 4000,
time: 33,
getWage: function(){            //this function has no parameter
  return this.salary+this.time;
}
};
console.log(employee.getWage());

//Abstraction - hidding all details to make sense, and reduce impact of change
//Inheritance - Inherit properties from other, eleminate redundancy
//Polymorphism - many form of same thing
