import express from "express";
// import { join, login } from "../controllers/userController";
import { postUpload, uploadVideos, list } from "../controllers/videoController";
import { videoUpload } from "../middlewares";

const videoRouter = express.Router();

videoRouter.route("/upload").get(uploadVideos).post(videoUpload.single('file'), postUpload); // videos/upload
videoRouter.route("/list").get(list).post(list); // videos/list
videoRouter.route("/list").get(list); // videos/edit
// videoRouter.route("/edit").get(edit).post(postUpdate); // videos/list

// globalRouter.get("/join", join);
// globalRouter.get("/login", login);

export default videoRouter;
