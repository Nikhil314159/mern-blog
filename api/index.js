const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.json("server is running on 4000");
});

app.listen(4000);
