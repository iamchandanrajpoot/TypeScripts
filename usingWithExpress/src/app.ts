import express from "express";
import todoRouter from "./routes/todos";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(todoRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
