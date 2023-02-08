import express from "express";
// import { join, login } from "../controllers/userController";
import { postUpload, uploadVideos, list } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.route("/upload").get(uploadVideos).post(postUpload);
videoRouter.get("/list", list);

// globalRouter.get("/join", join);
// globalRouter.get("/login", login);

export default videoRouter;
