var express = require("express");

app = express();

// //================================
// // Application Middleware

// app.use(function (req, res, next) {
//   console.log("I am from middleware validation");
//   next();
// });

// app.get("/", function (req, res) {
//   res.send("This is home page");
// });

// app.get("/about", function (req, res) {
//   res.send("This is about page");
// });

// app.get("/contact", function (req, res) {
//   res.send("This is contact page");
// });

//================================
// Route Middleware

app.get("/", function (req, res) {
  res.send("This is home page");
});

app.use("/about", function (req, res, next) {
  console.log("I am from about validation");
  next();
});

app.get("/about", function (req, res) {
  res.send("This is about page");
});

app.get("/contact", function (req, res) {
  res.send("This is contact page");
});

app.listen(8000, function () {
  console.log("Server is running on port 8000");
});
