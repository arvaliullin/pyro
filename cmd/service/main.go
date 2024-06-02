package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Usage: go run main.go <directory>")
		return
	}

	// Путь к директории с статическими файлами
	// передается первым аргументом командной строки
	dir := os.Args[1]

	fs := http.FileServer(http.Dir(dir))
	http.Handle("/", fs)

	// Установка заголовков для разрешения CORS
	cors := func(h http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Access-Control-Allow-Origin", "*")
			h.ServeHTTP(w, r)
		})
	}

	http.HandleFunc("/ping", func(w http.ResponseWriter, r *http.Request) {
		response := map[string]string{"value": "pong"}
		responseJSON, err := json.Marshal(response)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(responseJSON)
	})

	http.ListenAndServe(":8080", cors(http.DefaultServeMux))
}
