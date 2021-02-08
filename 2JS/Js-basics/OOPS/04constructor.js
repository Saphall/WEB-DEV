-//Constructor functions -represented by 'this.' and no return statement
function Circle(radius) { //in constructor function we declare first letter 'capital'
  console.log('this',this);
  this.radius=radius;
  this.draw = function () {
    console.log('draw');
  }
}

const another = new Circle(1); //new create empty object represented by 'this'.
// const anotherr = Circle(1); // this creates global object 'Window'
