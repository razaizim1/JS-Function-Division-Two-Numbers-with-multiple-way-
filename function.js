function doDivision(numOne, numTwo) {
    var result = numOne / numTwo;
    console.log(result)
}

doDivision(10, 20);
doDivision(100, 105);
doDivision(50, 25);
doDivision(500, 10);

// //WAy two

function doDivision(numOne, numTwo) {
    var result = numOne / numTwo;
    return result
}

console.log(doDivision(10, 20));
console.log(doDivision(40, 20));
console.log(doDivision(100, 20));
console.log(doDivision(1000, 20));

//Way 3
function doDivision(numOne, numTwo) {
    return numOne / numTwo;

}

console.log(doDivision(10, 20));
console.log(doDivision(40, 20));
console.log(doDivision(100, 20));
console.log(doDivision(2, 20));