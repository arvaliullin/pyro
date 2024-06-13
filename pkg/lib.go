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
	a := args[0].Int()
	b := args[1].Int()
	size := args[2].Int()
	return math.Multiply(a, b, size)
}

func multiplyVector(this js.Value, args []js.Value) interface{} {
	a := args[0].Int()
	b := args[1].Int()
	size := args[2].Int()
	return math.MultiplyVector(a, b, size)
}

func main() {
	fmt.Println("Creating WebAssembly code from Go!")
	js.Global().Set("fibonacciRecursive", js.FuncOf(fibonacciRecursive))
	js.Global().Set("fibonacciIterative", js.FuncOf(fibonacciIterative))
	js.Global().Set("multiply", js.FuncOf(multiply))
	js.Global().Set("multiplyVector", js.FuncOf(multiplyVector))
	select {}
}
