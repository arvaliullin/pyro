package math

import "testing"

func TestMultiply(t *testing.T) {
	value := Multiply(9, 33, 10)
	t.Logf("Multiply(9, 33, 10) = %v", value)
}

func TestMultiplyVector(t *testing.T) {
	value := MultiplyVector(9, 33, 10)
	t.Logf("MultiplyVector(9, 33, 10) = %v", value)
}
