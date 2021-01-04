const express = require("express");
const app = express();
const checkTime = require("./middleware/checkTime");

app.use(express.json());
const port = process.env.PORT || 4000;

app.use(checkTime);
app.use(express.static("public"));
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is running on port${port}...`);
});