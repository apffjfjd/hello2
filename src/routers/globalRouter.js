import express from "express";
// import { join, login } from "../controllers/userController";
import { home, uploadVideos } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/upload", uploadVideos);
// globalRouter.get("/list", uploadVideos);
// globalRouter.get("/join", join);
// globalRouter.get("/login", login);

export default globalRouter;
