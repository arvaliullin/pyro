package main

import (
	"encoding/json"
	"fmt"
	"pyro/internal/shapes"
)

func Calculate(s shapes.Shape) float64 {
	return s.Area()
}

func main() {

	fmt.Println("Shapes from native go!")

	c := shapes.Circle{R: 12.0}
	s := shapes.Square{X: 5.0}
	r := shapes.Rectangle{X: 12.0, Y: 5.0}

	fmt.Printf("Circle: %v\n", Calculate(c))
	fmt.Printf("Square: %v\n", Calculate(s))
	fmt.Printf("Rectangle: %v\n", Calculate(r))

	rMarshaled, _ := json.Marshal(r)

	fmt.Printf("Rectangle: %v\n", string(rMarshaled))
}
