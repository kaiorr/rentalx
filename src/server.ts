import express from "express";
import { baseIndex } from "./routes/baseIndex";
import { categoriesRoute } from "./routes/categories.route";

const app = express();

app.use(express.json());
app.use(baseIndex);
app.use(categoriesRoute);

app.listen(3333);
