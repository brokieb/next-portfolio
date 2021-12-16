import dbConnect from "app/lib/mongodb";
import App from "models/apps";
export default async (req, res) => {
  await dbConnect();
  const ans = await App.find(req.query.mainPage ? { mainPage: true } : {})
    .sort({ finishDate: -1 })
    .limit(req.query.limit ? parseInt(req.query.limit) : 999);
  res.status(200).json(ans);
};
