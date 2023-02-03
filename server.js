import express from "express";

const app = express();
const PORT = 4000;

app.set("veiw engine", "ejs");
app.set("veiws", "./views");

const middleware = (req, res, next) => {
  console.log("hi middleware");
  next();
};

const handleHome = (req, res) => {
  console.log("hi nodeJS");
  res.send("<h1>hi</h1>");
  res.end();
};
app.get("/create", middleware, handleHome);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
