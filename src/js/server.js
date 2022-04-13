const express = require("express");
const path = require("path");

const app = express();

const http = require("http").createServer(app);

http.listen(3000, () => {
  console.log("3000 port");
});

// middleware
app.use(express.static(path.join(__dirname, "../html")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../html/popup.html"));
});
