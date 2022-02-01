import express from "express";
import { baseIndex } from "./routes/index";
import { categoriesRoute } from "./routes/categories.route";
import { specificationsRoute } from "./routes/specifications.route";

const app = express();

app.use(express.json());
app.use(baseIndex);
app.use(categoriesRoute);
app.use(specificationsRoute);

app.listen(3333);
