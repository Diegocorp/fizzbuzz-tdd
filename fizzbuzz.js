function fizzbuzz(num) {
    const divisible = (divider, num) => num % divider === 0;
    
    if (divisible(3, num) && divisible(5, num)) {
        return "fizzbuzz";
    }

    if (divisible(3, num)) {
        return "fizz";
    }
    if (divisible(5, num)) {
        return "buzz";
    }

    return num;
}

function print(num) {
    for (let i = 1; i < num; i++) {
        console.log(`${i}: ${fizzbuzz(i)}`);
    }
}

print(40);

module.exports = fizzbuzz;