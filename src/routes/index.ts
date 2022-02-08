import { Router } from "express";
import { categoriesRoute } from "./categories.route";
import { specificationsRoute } from "./specifications.route";
import swaggerUI from "swagger-ui-express";

import swaggerSetup from "../docs/swagger.json";

const router = Router();

router.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSetup));

router.use(categoriesRoute);
router.use(specificationsRoute);

export { router };
