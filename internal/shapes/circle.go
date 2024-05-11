package shapes

import "math"

type Circle struct {
	R float64 `json:"r"`
}

func (c Circle) Area() float64 {
	return 2.0 * math.Pi * c.R
}
