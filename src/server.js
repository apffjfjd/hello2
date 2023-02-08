import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import ejsLayouts from "express-ejs-layouts";

const app = express();
const logger = morgan("dev");

app.set("view engine", "ejs");
app.set("views", "./src/views");
app.set("layout extractScripts", true);
app.set("layout", "layout");

app.use(logger);
app.use(ejsLayouts);
// app.use(express.urlencoded({ extended: true}));
// 위 코드는 무슨 의미인지?
app.use("/", globalRouter);

app.use("/", videoRouter);
// app.use("/users", userRouter);

export default app;
