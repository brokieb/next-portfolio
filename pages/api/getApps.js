import dbConnect from "app/lib/mongodb";
import App from "models/apps";
export default async (req, res) => {
  await dbConnect();

  const ans = await App.find();
  res.status(200).json(ans);
};
