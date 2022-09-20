function add(n1, n2, showResult, phrase) {
    console.log(typeof n1);
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
// string
var number1 = '5';
var phrase = "Result is: ";
// number
var number2 = 10.5;
// boolean
var printResult = true;
add(+number1, number2, printResult, phrase);
