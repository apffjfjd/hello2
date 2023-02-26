import express from "express";
// import { join, login } from "../controllers/userController";
import { postUpload, 
         uploadVideos, 
         list, 
         updateVideos,
         updateVideo,
         postUpdate,
         deleteVideos, 
         searchVideos   
        } from "../controllers/videoController";
import { videoUpload } from "../middlewares";

const videoRouter = express.Router();

videoRouter.route("/upload").get(uploadVideos).post(postUpload); // videos/upload
videoRouter.route("/list").get(list).post(updateVideo); // videos/list
videoRouter.route("/:id/update").get(updateVideos).post(postUpdate); // videos/edit
videoRouter.route("/:id/delete").get(deleteVideos); // videos/edit
videoRouter.route("/search").get(searchVideos); // videos/edit
// videoRouter.route("/edit").get(edit).post(postUpdate); // videos/list

// globalRouter.get("/join", join);
// globalRouter.get("/login", login);

export default videoRouter;
