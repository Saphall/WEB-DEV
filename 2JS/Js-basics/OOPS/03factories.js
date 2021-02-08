//if object has behaviour : more than two functions
//Factory fucntion
function createCircle(radius) {
  return{
    radius,  //similar to radius=radius; but used to elimate noise in ES6.
    draw: function() {
      console.log('hello');
    }
  };
}

const circle = createCircle(1);
circle.draw();
