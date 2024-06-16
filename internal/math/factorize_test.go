package math

import (
	"reflect"
	"testing"
)

func TestFactorize(t *testing.T) {
	cases := []struct {
		input  int
		output []int
	}{
		{12, []int{2, 2, 3}},
		{56, []int{2, 2, 2, 7}},
		{100, []int{2, 2, 5, 5}},
	}

	for _, c := range cases {
		result := Factorize(c.input)
		if !reflect.DeepEqual(result, c.output) {
			t.Errorf("factorize(%d) == %v, ожидалось %v", c.input, result, c.output)
		}
	}
}
