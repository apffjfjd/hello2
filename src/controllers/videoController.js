import Video from "../models/Video";

export const home = (req, res) => {
  return res.render("home", { pageTitle: "Home", loggedIn: false });
};

export const uploadVideos = (req, res) => {
  return res.render("upload", {
    pageTitle: "Upload Video",
  });
};

export const postUpload = async (req, res) => {
  // const { originalname, path } =req.file;
  const { title, description, hashtags } = req.body;
  console.log(req.body);
  console.log(req.file);
  try {await Video.create({
    errorMessage: error._message,
    // path,
    title,
    description,
    createdAt : Date.new,
    hashtags: hashtags.split(",").map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  }); // const videos = new Video({}); /n videos.save();
  return res.redirect("/videos/list");
} catch(error) {
  return res.render("upload", {
    pageTitle: "Upload Video",
    errorMessage: error._message,
  });
}
};

export const list = async (req, res) => {
  const videos = await Video.find({});
  console.log(videos);
  return res.render("list", {
    pageTitle: "Video List"
  }, videos);
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
