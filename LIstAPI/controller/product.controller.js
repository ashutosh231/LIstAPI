import { listProductsService ,createProductService } from "../services/product.service.js";
import { OffsetPaginationService } from "../services/product.service.js";
import { Product } from "../models/product.model.js";

export const listProductsController = async (req, res, next) => {
  try {
    const products = await listProductsService();

    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    next(error);
  }
};



export const createProductController = async (req, res, next) => {
  try {
    const product = await createProductService(req.body);

    res.status(201).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};

export const offsetPaginationController = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const result = await OffsetPaginationService(Product, page, limit);

    res.status(200).json({
      success: true,
      data: result.products,
      pagination: result.pagination
    });
  } catch (error) {
    next(error);
  }
};