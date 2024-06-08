export function multiply(a, b, size) {
    let result = 0;
    for (let i = 0; i < size; i++) {
        result = a * b;
    }
    return result;
}

export function multiplyVector(a, b, size) {
    let aVector = new Array(size);
    let bVector = new Array(size);
    let resultVector = new Array(size);
    for (let i = 0; i < size; i++) {
        aVector[i] = a;
        bVector[i] = b;
        resultVector[i] = aVector[i] * bVector[i];
    }
    return resultVector;
}
