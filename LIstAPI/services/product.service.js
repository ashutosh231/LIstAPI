import { Product } from "../models/product.model.js";

export const listProductsService = async () => {
  const products = await Product.find();
  return products;
};


export const createProductService = async (data) => {
  const product = await Product.create(data);
  return product;
};

export const OffsetPaginationService = async (model, page, limit) => {
  const skip = (page - 1) * limit;
  const [products,totalProducts] = await Promise.all([
    model.find().skip(skip).limit(limit),
    model.countDocuments()
  ]);
  return {
    products,
    pagination:
    {
        page,
        limit,
        totalProducts,
        totalPages: Math.ceil(totalProducts / limit),
        hasNextPage: page * limit < totalProducts,
        hasPrevPage: page > 1
    }
  };
};