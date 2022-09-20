function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    console.log(typeof n1);
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

// string
const number1 = '5';
const phrase = "Result is: "
// number
const number2 = 10.5;
// boolean
const printResult = true;

add(+number1, number2, printResult, phrase);
