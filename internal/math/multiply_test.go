package math

import "testing"

func TestMultiply(t *testing.T) {
	value := Multiply(9)
	t.Logf("Multiply(9) = %v", value)
}

func TestMultiplyVector(t *testing.T) {
	value := MultiplyVector(9)
	t.Logf("MultiplyVector(9) = %v", value)
}
