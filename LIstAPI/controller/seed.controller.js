import { Product } from "../models/product.model.js";
import { products } from "../seed.js";

export const seedDatabaseController = async (req, res, next) => {
  try {
    // Clear existing data
    await Product.deleteMany();
    
    // Insert seed data
    const insertedProducts = await Product.insertMany(products);

    res.status(200).json({
      success: true,
      message: "Database seeded successfully",
      count: insertedProducts.length,
      data: insertedProducts
    });
  } catch (error) {
    next(error);
  }
};
