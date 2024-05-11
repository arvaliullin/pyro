package shapes

type Square struct {
	X float64 `json:"x"`
}

func (s Square) Area() float64 {
	return s.X * s.X
}
