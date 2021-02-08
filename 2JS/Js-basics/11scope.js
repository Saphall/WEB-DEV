// scope varible concept in:
// 1. code block
// 2. If statement block
// 3. for loop block

const color = 'Red';    // global scope/variable
{
  const mes = 'hello';  //local scope/variable
}

console.log(color);   //accessible everywhere
console.log(mes);     //error since cannot access variable in the code-block
