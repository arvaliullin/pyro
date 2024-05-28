package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Usage: go run main.go <directory>")
		return
	}

	dir := os.Args[1] // Путь к директории с статическими файлами передается первым аргументом командной строки

	fs := http.FileServer(http.Dir(dir))
	http.Handle("/", fs)

	// Установка заголовков для разрешения CORS
	cors := func(h http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Access-Control-Allow-Origin", "*")
			h.ServeHTTP(w, r)
		})
	}

	fmt.Printf("Сервер запущен на http://localhost:8080 и обслуживает статические файлы из директории: %s\n", dir)
	http.ListenAndServe(":8080", cors(http.DefaultServeMux))
}
