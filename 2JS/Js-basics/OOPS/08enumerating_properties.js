function Circle(radius) {
  this.radius = radius;
  this.draw= function () {
    console.log('draw');
  }
}
const circle= new Circle(10);



//for-in
for (let key in circle){         //keys : includes both methods and property
  console.log(key,circle[key]);
}

for (let key in circle){
  if (typeof circle[key] !== 'function')   //filtering funtion type of keys from object
    console.log(key,circle[key]);
}



//Object.keys
const keys = Object.keys(circle);
console.log('\n'+keys);


//check the existence of propetry or method
if ('radius' in circle)
  console.log('\nCircle has raduis');
