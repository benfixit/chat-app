const app = require("express")();
const http = require("http").createServer(app);

const PORT = 8080;

http.listen(PORT, () => {
    console.log(`Listening on *:${PORT}`);
})