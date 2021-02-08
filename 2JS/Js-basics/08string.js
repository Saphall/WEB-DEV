// string primitive
const message = 'Hi';
console.log(typeof(message));
console.log(message.length+'\n');


//String object
const another = new String('hi');
console.log(typeof(another));


//different methods
message.length
message.includes('my')
message.startsWith('Hi')
message.endsWith('no')
message.indexOf('Hi')
message.replace('H','t')
message.toUpperCase()
message.toLowerCase()

message.trim() //removes spaces before and after
message.trimLeft()
message.trimRight()

message.split('') //split with spaces


//Escaper notations
// single quote =>  \'
// newline => \n
