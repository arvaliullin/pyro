package math

func Factorize(n int) []int {
	factors := make([]int, 0)
	d := 2
	for n > 1 {
		for n%d == 0 {
			factors = append(factors, d)
			n /= d
		}
		d++
	}
	return factors
}
