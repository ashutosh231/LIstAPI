import express from "express";
import {listProductsController ,createProductController} from "../controller/product.controller.js";
import { offsetPaginationController } from "../controller/product.controller.js";
const router = express.Router();

router.get("/", listProductsController);
router.post("/", createProductController);
router.get("/pagination", offsetPaginationController);

export default router;