package math

import "testing"

func TestFibonacciRecursive(t *testing.T) {
	value := FibonacciRecursive(10)
	t.Logf("FibonacciRecursive(10) = %v", value)
}

func TestFibonacciIterative(t *testing.T) {
	value := FibonacciIterative(10)
	t.Logf("FibonacciIterative(10) = %v", value)
}
