import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userid: String,
  password: Number,
  username: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

export default User;
