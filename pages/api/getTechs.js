import dbConnect from "app/lib/mongodb";
import Techs from "models/techs";
export async function getData() {
  await dbConnect();
  const ans = await Techs.find().sort({ order: 1 });
  return ans;
}
export default async (req, res) => {
  const jsonData = await getData();
  res.status(200).json(jsonData);
};
