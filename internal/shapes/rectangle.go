package shapes

type Rectangle struct {
	X float64 `json:"x"`
	Y float64 `json:"y"`
}

func (r Rectangle) Area() float64 {
	return r.Y * r.X
}
