import Video from "../models/Video";

export const home = (req, res) => { // get, home
  return res.render("home", { 
    pageTitle: "Home",
    loggedIn: false });
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
  await Video.create({
    // path,
    title,
    description,
    hashtags: hashtags.split(",").map((word) => `#${word}`),
  });
  return res.redirect("/videos/list");
};

export const list = async (req, res) => {
  const videos = await Video.find({delete : false});
  console.log(videos);
  return res.render("list", {
    pageTitle: "Video List",
    videos : videos,
  });
};


export const updateVideo = async (req, res) => {
  const boardId = req.params.id;
  console.log(boardId);
  return res.redirect(`/videos/${boardId}/update`);
};

export const updateVideos = async (req, res) => {
  const videos = await Video.find({_id : req.params.id}).exec();
  console.log("videos[0]");
  console.log(videos[0]);
  return res.render("update", {
    pageTitle: "Update Video",
    title : videos[0].title,
    description : videos[0].description,
    hashtags : videos[0].hashtags
  });
};

export const postUpdate = async (req, res) => {
  const updateBoard = req.body;
  console.log("updateBoard");
  console.log(updateBoard);
    try {
      const videos = await Video.findOneAndUpdate(
        {_id : req.params.id}, 
        {$set :updateBoard},
        {returnOriginal : false}
        );
      console.log("videos");
      console.log(videos);
      if(!videos) {
        return res.status(404).send("Board not found");
    } return res.redirect("/videos/list");
    } catch {
      return res.render("update", {
      pageTitle: "Update Video",
    });
  };
};

export const deleteVideos = async (req,res) => {
  try {
    const videos = await Video.findOneAndUpdate(
      {_id : req.params.id}, 
      {delete : true},
      {returnOriginal : false}
      );
      return res.redirect("/videos/list");
  } catch {
    return res.render("list", {
    pageTitle: "Video List"
  });
}
}

export const postDelete = async (req,res) => {

}



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
