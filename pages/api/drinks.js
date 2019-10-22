import Drink from "../../models/Drink";
import connectDb from "../../utils/connectDb";

connectDb();

export default async (req, res) => {
  try {
    const drinks = await Drink.find();
    res.status(200).json({ drinks });
  } catch (err) {
    console.error(error);
    res.status(500).send("Something wrong with the get Drinks API");
  }
};
