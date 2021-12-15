import dbConnect from "app/lib/mongodb";
import Techs from "models/techs";
export default async (req, res) => {
  await dbConnect();

  const ans = await Techs.find().sort({ order: 1 });
  res.status(200).json(ans);
};
