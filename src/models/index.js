import mongoose from "mongoose";

const UserScema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
});

const User = mongoose.models.User || mongoose.model("User", UserScema);
export default User;
