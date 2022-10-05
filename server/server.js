const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "build");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get("/*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
console.log("TEST" + __dirname);

app.listen(port, () => {
  console.log("Server is up!");
});
