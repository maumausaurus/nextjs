export function addition(toto, tata) {
    return toto + tata;
}
console.log(addition(23, 1))

export function substract(a, b) {
    return a - b;
}

console.log(substract(15, 5))

export function divide(numerator, denominator) {
    return numerator / denominator
}

console.log(divide(15, 3))
console.log(divide(15, 5))

export function compare(a, b) {
    if (a > b) {
        return 'Bigger';
    } else if (a < b) {
        return 'Smaller';
    }
    return 'Samsies'
}
console.log(compare(11, 11))