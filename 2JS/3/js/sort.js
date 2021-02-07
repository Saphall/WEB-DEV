var numbers = [43, 56, 601,100,45,10,50, 34];
var words =['apple','pear','coconut','pizza','hamberger','banana'];
//console.log(words.sort())
//console.log(numbers.sort(function(a,b){
//  return a-b;
//}))
function missingNumbers(num){
  var missing = -1;
  for(var i=0;i<=num.length;i++){
    if (num.indexOf(i)==-1){
      missing =i;
    }
  }
  return missing; 

}
var num =[3,8,7,9,6,1,12,18,5,14,2,19,16,11,10,15,13,17,20]
// num = num.sort(function(a,b){
//   return a-b;
// })
console.log(missingNumbers(num));
