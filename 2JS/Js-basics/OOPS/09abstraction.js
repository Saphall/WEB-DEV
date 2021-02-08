function Circle(radius) {
  let color = 'red';    //this will not be the property of object because we didnot declare by 'this.'
  this.radius = radius;

  //hiding property by local variabel declaration
   let defaultLocation = {x:0,y:0};
   let compueOptimumLocation = function() {
    // ..
  }

  this.draw= function() {         //can access the variables of parent function: 'Closure property'

    compueOptimumLocation(); //accessing private members directly
    this.radius=22;    // accessing the property of object with this.

    console.log('draw');
  };
}
const circle = new Circle(10);
