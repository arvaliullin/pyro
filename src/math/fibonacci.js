export function fibonacciRecursive(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

export function fibonacciIterative(n) {
    if (n <= 1) {
        return n;
    }

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    return b;
}
