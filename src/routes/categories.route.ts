import { Router } from "express";
import { v4 as uuidV4 } from "uuid";
import { Category } from "../models/Category";

const categoriesRoute = Router();
const categories: Category[] = [];

categoriesRoute.post("/categories", (request, response) => {
  const { name, description } = request.body;
  const category: Category = {
    id: uuidV4(),
    name,
    description,
    created_at: new Date(),
  };

  categories.push(category);

  return response.status(201).json({ category });
});

export { categoriesRoute };
