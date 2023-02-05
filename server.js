import express from "express";

const app = express();
const PORT = 4000;

app.set("view engine", "ejs");
app.set("views", "./src/views");

const middleware = (req, res, next) => {
  console.log("hi middleware");
  next();
};

const handleHome = (req, res) => {
  console.log("hi nodeJS");
  res.render("home", {userDb : userDb});
};

const handleCreate =(req, res) => {
  console.log("/create");
  res.render("create");
  res.end();
}
const handleDetail =(req, res) => {
  console.log("/detail");
  res.render("detail");
  res.end();
}
const handleList =(req, res) => {
  console.log("/list");
  res.render("list");
  res.end();
}
const handleUpdate =(req, res) => {
  console.log("/update");
  res.render("update");
  res.end();
}
const handleLogin =(req, res) => {
  console.log("/login");
  res.render("login");
  res.end();
}
const handleLogout =(req, res) => {
  console.log("/logout");
  res.render("logout");
  res.end();
}

let userDb = {
  id : "apffjfjd",
  name : "kdKim",
  content : "hello2 hello2",
  loggedIn : false
};
app.get("/", handleHome);
app.get("/create", middleware, handleCreate);
app.get("/detail", middleware, handleDetail);
app.get("/list", middleware, handleList);
app.get("/update", middleware, handleUpdate);
app.get("/login", middleware, handleLogin);
app.get("/logout", middleware, handleLogout);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
