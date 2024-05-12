package math

import "testing"

func TestSum(t *testing.T) {
	var arr []int
	for i := 1; i <= 10000000; i++ {
		arr = append(arr, i)
	}

	result := Sum(arr...)
	t.Logf("Sum(arr...) = %v", result)
}
