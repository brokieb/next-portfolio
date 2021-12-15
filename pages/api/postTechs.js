import dbConnect from "app/lib/mongodb";
import Techs from "models/techs";
export default async (req, res) => {
  await dbConnect();
  try {
    const data = await Techs.create([
      { order: 0, title: "JavaScript", icon: "devicon-javascript-plain" },
      { order: 1, title: "NextJS", icon: "devicon-nextjs-original" },
      { order: 2, title: "React", icon: "devicon-react-original" },
      { order: 3, title: "MySQL", icon: "devicon-mysql-plain" },
      { order: 4, title: "PHP", icon: "devicon-php-plain" },
      { order: 5, title: "MongoDB", icon: "devicon-mongodb-plain " },
      { order: 6, title: "ExpressJS", icon: "devicon-express-original" },
      { order: 7, title: "HTML5", icon: "devicon-html5-plain" },
      { order: 8, title: "CSS3", icon: "devicon-css3-plain" },
      { order: 9, title: "SASS", icon: "devicon-sass-original" },
      { order: 10, title: "Bootstrap", icon: "devicon-bootstrap-plain" },
      { order: 11, title: "NPM", icon: "devicon-npm-original-wordmark" },
      { order: 12, title: "JQuery", icon: "devicon-jquery-plain" },
      { order: 13, title: "GitHub", icon: "devicon-github-original" },
      { order: 14, title: "VScode", icon: "devicon-visualstudio-plain" },
      { order: 15, title: "GIMP", icon: "devicon-gimp-plain" },
      { order: 16, title: "Wordpress", icon: "devicon-wordpress-plain" },
      { order: 17, title: "Linux", icon: "devicon-linux-plain" },
      { order: 18, title: "Windows", icon: "devicon-windows8-original" },
    ]);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
};
