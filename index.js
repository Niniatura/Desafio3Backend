const http = require("http");

const PORT = 8080;
const server = http.createServer((req, res) =>{
    res.end("Mi primer hola mundo desde backend!")
});

server.listen(PORT, () =>{
    console.log(`El servidor esta arriba en el puerto ${PORT}`);
})