package main

import "testing"

func TestGlobal(t *testing.T) {
	if Global != 1234 {
		t.Errorf("Global == %v", Global)
	}
}
