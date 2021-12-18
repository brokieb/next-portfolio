import dbConnect from "app/lib/mongodb";
import App from "models/apps";

export async function getData(mainPage = false, limit = 9999) {
  await dbConnect();
  const ans = await App.find(mainPage ? { mainPage: true } : {})
    .sort({ finishDate: -1 })
    .limit(limit ? parseInt(limit) : 999);
  return ans;
}

export default async function handler(req, res) {
  const jsonData = await getData(req.query.mainPage, req.query.limit);
  res.status(200).json(jsonData);
}
