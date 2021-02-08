function Circle(radius) {
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  }
}
const circle = new Circle(1);
console.log(circle);


//Adding property in object
circle.location ={x:1};
console.log(circle);
circle['location'] = {c:2}; //bracket way of notaion.
console.log(circle);


//Deleting propety of object
delete circle.location;    //can use bracket notation as well.
console.log(circle);
