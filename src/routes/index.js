import { Router } from "express";
import productRoutes from "../modules/product/product.routes.js";
import categoryRoutes from "../modules/category/category.routes.js";

const router = Router();

router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);

export default router;
