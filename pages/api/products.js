import Product from "../../models/Product";
import connectDb from "../../utils/connectDb";

connectDb();

export default async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (err) {
    console.error(error);
    res.status(500).send("Something wrong with the get Products API");
  }
};
