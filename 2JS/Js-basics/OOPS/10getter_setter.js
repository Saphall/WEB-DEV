function Circle(radius) {
  this.radius = radius;

  //hiding property by local variabel declaration
   let defaultLocation = {x:0,y:0};
   this.getDefaultLocation = function() {   //access to private member by get-fucntion
     return defaultLocation;
   };

   this.draw= function() {
    console.log('draw');
  };


  //declare to access private member by getter: i.e. circle.defaultLocation;
  Object.defineProperty(this,'defaultLocation',{
    get: function(){
      return defaultLocation;
    },
    set: function (value) {
      defaultLocation=value;
    }
  });
}

const circle = new Circle(10);
circle.draw();

//access the member by circle.getDefaultLoaction(); => not a clean way.
circle.getDefaultLocation();

//valid by Object.defineProperty
circle.defaultLocation;
