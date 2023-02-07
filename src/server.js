import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";


const app = express();
const logger = morgan("dev");

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(logger);
// app.use(express.urlencoded({ extended: true}));
// 위 코드는 무슨 의미인지?
app.use("/", globalRouter);
// app.use("/videos", videoRouter);
// app.use("/users", userRouter);

export default app;


