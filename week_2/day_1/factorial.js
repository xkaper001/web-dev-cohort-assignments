function factorial(num) {
    let sum = 0
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    return sum;
}

let ans = factorial(5);
console.log(ans)