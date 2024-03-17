import { createServer } from "http";

const server = createServer((request, response) => {
    
    console.log(`Method: ${request.method}, URL: ${request.url}`);

    
    if (request.url === "/prodotti") {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        response.end("<html><body><h1>Prodotti</h1></body></html>");
    } else if (request.url === "/contatti") {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        response.end("<html><body><h1>Contatti</h1></body></html>");
    } else {
        // Route per 404
        response.statusCode = 404;
        response.setHeader("Content-Type", "text/html");
        response.end("<html><body><h1>404 - Pagina non trovata</h1></body></html>");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
