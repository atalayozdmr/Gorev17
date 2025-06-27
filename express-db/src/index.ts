import express from "express";
import usersRouter from "./routes/users";
import productsRouter from "./routes/products";
import cors from "cors";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("<h1 style='color: red;'>Hello World</h1>");
});

app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
