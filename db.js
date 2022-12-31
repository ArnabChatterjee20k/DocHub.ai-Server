import mongoose from "mongoose";
mongoose.connect("mongodb://localhost/docs", {
  useNewUrlParser: true,
  user: "root",
  pass: "root",
  authSource: "admin",
});

const db = mongoose.connection;
db.on("error", () => {
  console.error("Error");
});

db.once("open", () => {
  console.log("connected");
});


module.exports = db