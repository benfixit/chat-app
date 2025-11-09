import socketClient  from "socket.io-client";
import './App.css'

const SERVER = "http://localhost:4000";
function App() {
  const socket = socketClient(SERVER);

  socket.on("connection", () => {
    console.log(`I am connected with the backend`);
  })
  return (
    <>
    </>
  )
}

export default App
