//Value Type property
let x = 10;
let y = x;
x = 20;      //x and y are independent properties
console.log(x);
console.log(y);


//Reference Type property
let p = { value: 10};
let q = p;
p.value =20;
console.log(p);
console.log(q);   //reference of q is pointing to same reference of p.


//Primite type
let number =10;
function increase(number) {
  number ++;    //number is not incremented 'reference' oriented.
}
increase(number);
console.log(number); //value is unaltered.



//Reference type
let obj = {value: 3};
function inc(obj) {
  obj.value++;
}
inc(obj);   //passed by reference
console.log(obj);   //value increases because it is a reference type
