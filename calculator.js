function absoluteValue(number) {
    return Math.abs(number);
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

function squareRoot(number) {
    return Math.sqrt(number);
}

function maximum(numbers) {
    //Math.max() does not support arrays, so this is a manual implementation.
    let max = numbers[0];
    
    for (number of numbers) {
        if (number > max) {
            max = number;
         }
    }
    
    return max;
}

function minimum(numbers) {
    //Math.min() does not support arrays, so this is a manual implementation.
    let min = numbers[0];
    
    for (number of numbers) {
        if (number < min) {
            min = number;
         }
    }
    
    return min;
}

function random(min, max) {
    let randomNumber = Math.random() * (max - min + 1) + min;
    return Math.floor(randomNumber);
}

function rounder(number, decimalPlace) {
    return number.toFixed(decimalPlace);
}


//Tests
let absTest = absoluteValue(-45.67);
console.log(`\nAbsolute value of -45.67 = ${absTest}\n`);

let powTest = power(5,3);
console.log(`5 to the power of 3 = ${powTest}\n`);

let rootTest = squareRoot(144);
console.log(`Square root of 144 = ${rootTest}\n`);

let numberArray = [3, 78, -12, 0.5, 27];
let minTest = minimum(numberArray);
let maxTest = maximum(numberArray);
console.log(`List of numbers: ${numberArray}`);
console.log(`Minimum = ${minTest}, Maximum = ${maxTest}\n`);

let randomTest = random(1,50);
console.log(`Random number between 1 and 50 = ${randomTest}\n`);

let roundTest = rounder(23.67891,2);
console.log(`23.67891 rounded to 2 decimal places = ${roundTest}\n`);