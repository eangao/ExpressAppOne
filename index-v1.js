var express = require("express");

app = express();

app.get("/one", function (req, res) {
  res.end("This is simple end string respone");
});

app.post("/two", function (req, res) {
  res.send("This is simple post string respone");
});

//response status code
app.get("/three", function (req, res) {
  res.status(201).end();
});

//Json response
app.get("/four", function (req, res) {
  let MyJsonArray = [
    { id: 1, name: "John" },
    { id: 2, name: "Mike" },
    { id: 3, name: "Steve" },
  ];
  res.json(MyJsonArray);
});

//response download
app.get("/five", function (req, res) {
  res.download("./upload/text.txt");
});

//response redirect
app.get("/usa", function (req, res) {
  res.redirect("http://localhost:8000/india");
});

app.get("/india", function (req, res) {
  res.send("This is India page");
});

// Response Header
app.get("/six", function (req, res) {
  res.append("name", "Elmar Angao");
  res.append("city", "Gingoog");

  res.status(201).end("This is Response Header");
});

// Response set cookies data
app.get("/seven", function (req, res) {
  res.cookie("name", "Elmar Angao");
  res.cookie("city", "Gingoog");
  res.cookie("age", "35 years old");

  res.end("Cookie set successfully");
});

// Response Delete Cookies Data
app.get("/eight", function (req, res) {
  res.clearCookie("name");
  res.clearCookie("city");

  res.end("Cookie clear successfully");
});

app.listen(8000, function () {
  console.log("Server is running on port 8000");
});
