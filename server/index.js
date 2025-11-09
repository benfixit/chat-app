const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
    cors: {
        origin: "*"
    }
});
const STATIC_CHANNELS = ["global_notifications", "global_chat"];

const PORT = 4000;

http.listen(PORT, () => {
    console.log(`Listening on *:${PORT}`);
});

io.on("connection", (socket) => {
    console.log("new client connected");
    socket.emit("connection", null);
})