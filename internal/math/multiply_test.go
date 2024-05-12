package math

import "testing"

func TestMultiply(t *testing.T) {
	var arr []int
	for i := 1; i <= 10000000; i++ {
		arr = append(arr, i)
	}

	for i := 1; i < 10000000; i++ {
		arr[i] = Multiply(arr[i], arr[i-1])
	}
}
