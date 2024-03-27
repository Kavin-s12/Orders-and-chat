import express from "express";
import { createOrderRouter } from "./router/create-order.js";
import { Server as Socket } from "socket.io";
import { getOrdersRouter } from "./router/get-orders.js";

const app = express();

app.use(express.json());

const server = app.listen("5000", () => {
  console.log("Server started on port 5000");
});

// Attach socket
const io = new Socket(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
});

// Handle socket.io connections
io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  // Handle incoming messages
  socket.on("sendMessage", (message) => {
    console.log("message received", message);
    socket.broadcast.emit("message", message);
  });

  // Handle client disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

//routers
app.use(createOrderRouter(io));
app.use(getOrdersRouter);
app.all("*", (req, res) => {
  res.status(404).send({ error: "Route not found" });
});
