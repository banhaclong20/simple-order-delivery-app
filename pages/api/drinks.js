import Drink from "../../models/Drink";
import connectDb from "../../utils/connectDb";

connectDb();

export default async (req, res) => {
  const drinks = await Drink.find();
  res.status(200).json({ drinks });
};
