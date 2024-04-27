class Application {
    run() {
        console.log("Hello, world!");
        [2, 4, 6, 8].forEach(console.log);
    }
}

export function setMessage() {
    let h1 = document.querySelector("#message")
    h1.textContent = "Bye, world!"
}

window.setMessage = setMessage

const app = new Application();
app.run();
