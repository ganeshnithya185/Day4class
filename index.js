import express from "express";
import cors from "cors";
import roomRouter from "./Routers/room.router.js"; // Adjust the path as needed

const PORT = 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/room", roomRouter);
app.get("/", (req, res) => {
  res.send("Hello, this is your Express API!");
});

app.listen(PORT, () => {
  console.log("My app is listening on port 4000");
});
