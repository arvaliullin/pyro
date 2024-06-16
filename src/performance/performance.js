import {factorize} from "../math/factorize.js";
import {multiply, multiplyVector} from "../math/multiply.js";
import {fibonacciIterative, fibonacciRecursive} from "../math/fibonacci.js";

function measurePerformance(func1, func2, args) {

    let results = [];
    for (let n of args) {
        let start1 = performance.now();
        func1(n);
        let end1 = performance.now();
        let time1 = Math.round((end1 - start1) * 1000);

        let start2 = performance.now();
        func2(n);
        let end2 = performance.now();
        let time2 = Math.round((end2 - start2) * 1000);

        results.push({N : n, JavaScript : time1,  WebAssembly : time2});
    }
    return results;
}

const performanceExperiments = {
    fibonacciRecursive: {
        experimentName: "Рекурсивная функция Фибоначи",
        args: [35,36,37,38,40],
        calculatePerformance: function () {
            return measurePerformance(fibonacciRecursive, globalThis.fibonacciRecursive, this.args);
        }
    },
    multiply: {
        experimentName: "Функция перемножение целых чисел",
        args: [500000, 600000, 700000, 800000],
        calculatePerformance: function () {
            return measurePerformance(multiply, globalThis.multiply, this.args);
        }
    },
    multiplyVector: {
        experimentName: "Функция перемножение векторов",
        args: [500000, 600000, 700000, 800000],
        calculatePerformance: function () {
            return measurePerformance(multiplyVector, globalThis.multiplyVector, this.args);
        }
    },
    factorize: {
        experimentName: "Функция факторизации числа",
        args: [184382976303, 210987654321, 123456789101, 987654321009 ],
        calculatePerformance: function () {
            return measurePerformance(factorize, globalThis.factorize, this.args);
        }
    }
};

export default performanceExperiments;
