import express from "express";
// import { join, login } from "../controllers/userController";
import { home, uploadVideos } from "../controllers/videoController";
import videoRouter from "./videoRouter";
import userRouter from "./userRouter";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.use("/videos", videoRouter);
// globalRouter.use("/user", userRouter);

export default globalRouter;
