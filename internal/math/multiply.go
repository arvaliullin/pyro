package math

func Multiply(a, b, size int) int {
	result := 0
	for i := 0; i < size; i++ {
		result = a * b
	}
	return result
}

func MultiplyVector(a, b, size int) []int {
	aVector := make([]int, size)
	bVector := make([]int, size)
	resultVector := make([]int, size)
	for i := 0; i < size; i++ {
		aVector[i] = a
		bVector[i] = b
		resultVector[i] = aVector[i] * bVector[i]
	}
	return resultVector
}
