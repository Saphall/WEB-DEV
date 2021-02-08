///--- It is recommende to use 'let'--- ///
//var declares variable globally - attach to window object

//var is limited more to function
for (var i = 0; i < 4;i++){
  console.log(i);}

console.log(i);


//let is limited to scope
for (let j = 0; j< 2 ; j++){
  console.log('\n'+j);
}
console.log(j);    //error because let is less limited to scope
