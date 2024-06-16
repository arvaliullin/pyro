package main

import (
	"fmt"
	"pyro/internal/math"
	"syscall/js"
)

func fibonacciRecursive(this js.Value, args []js.Value) interface{} {
	n := args[0].Int()
	return math.FibonacciRecursive(n)
}

func fibonacciIterative(this js.Value, args []js.Value) interface{} {
	n := args[0].Int()
	return math.FibonacciIterative(n)
}

func multiply(this js.Value, args []js.Value) interface{} {
	size := args[0].Int()
	return math.Multiply(size)
}

func multiplyVector(this js.Value, args []js.Value) interface{} {
	size := args[0].Int()
	_ = math.MultiplyVector(size)
	return nil
}

func factorize(this js.Value, args []js.Value) interface{} {
	n := args[0].Int()
	_ = math.Factorize(n)
	return nil
}

func main() {
	fmt.Println("Creating WebAssembly code from Go!")
	js.Global().Set("fibonacciRecursive", js.FuncOf(fibonacciRecursive))
	js.Global().Set("fibonacciIterative", js.FuncOf(fibonacciIterative))
	js.Global().Set("multiply", js.FuncOf(multiply))
	js.Global().Set("multiplyVector", js.FuncOf(multiplyVector))
	js.Global().Set("factorize", js.FuncOf(factorize))
	select {}
}
