//conditional statements
// 1. If-Else
// 2. Switch

let hour = new Date();
hour = hour.getHours();
console.log(hour);

if (hour>=6 && hour< 12)
  console.log('Good Morning');

else if (hour>=12 && hour < 18){
  console.log('Good Afternoon');
}

else
   console.log('Good Evening');
