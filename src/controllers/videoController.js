import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", 
  loggedIn: false });
};
export const uploadVideos = async (req, res) => {
    const videos = await Video.find({});
  return res.render("upload", { 
    pageTitle: "Upload Video",
});
};
export const list = (req, res) => {
  //   const videos = await Video.find({});
  return res.render("list", { pageTitle: "Video List" });
};
// export const watch = (req, res) => {
//   const { id } = req.params;
//   return res.render("watch", { pageTitle: `Watching` });
// };
// export const getEdit = (req, res) => {
//   const { id } = req.params;
//   return res.render("edit", { pageTitle: `Editing` });
// };
// export const postEdit = (req, res) => {
//   const { id } = req.params;
//   const { title } = req.body;
//   return res.redirect(`/videos/${id}`);
// };
// export const postUpload = (req, res) => {
//   const { title, description, hashtags } = req.body;
//   const video = new Video({
//     title: title,
//     description: description,
//     createdAt: Date.now(),
//     hashtags: hashtags.split(",").map((word) => `#${word}`),
//     meta: {
//       views: 0,
//       rating: 0,
//     },
//   });
//   console.log(video);
//   video.save();
//   return res.redirect("/list");
// };
export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  console.log(req.body);
  await Video.create({
    title,
    description,
    createdAt,
    hashtags: hashtags.split(",").map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  return res.redirect("/");
};
