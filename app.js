const { RSA_NO_PADDING } = require('constants');
const http = require('http');
const server = http.createServer((req, res) => {
    
    res.write("Welcome to my  webpage");
    res.end();
})

server.listen(5000, "localhost", () => {
    console.log("Server created");
});