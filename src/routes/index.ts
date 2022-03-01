import { Router } from "express";
import { categoriesRoute } from "./categories.route";
import { specificationsRoute } from "./specifications.route";

const router = Router();

router.use(categoriesRoute);
router.use(specificationsRoute);

export { router };
