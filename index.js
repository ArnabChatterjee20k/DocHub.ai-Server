import express from "express";
import cors from "cors";
import botRouter from "./Routes/Bot.js";
import { Server } from "socket.io";
import { createServer } from "http";
import Document from "./Document.js";
import findOrCreateDocument from "./Services/findorCreateDocument.js";
import db from "./db.js";

const app = express();
const httpServer = createServer(app);
const port = 5000;
const io = new Server(httpServer, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {
  socket.on("get-document", async (documentId) => {
    const document = await findOrCreateDocument(documentId);
    const data = document.data;
    socket.join(documentId);
    socket.emit("load-document", data);

    // nested the event inside this event so that document id is also accessible
    socket.on("send-changes", (delta) => {
      socket.broadcast.to(documentId).emit("receive-changes", delta); // sending data to a particular room
    });

    socket.on("save-document", async (data) => {
      await Document.findByIdAndUpdate(documentId, { data });
    });
  });
});

app.use("/bot", botRouter);

httpServer.listen(port, () => {
  console.log(`Noty listening on http://localhost:${port}`);
});
