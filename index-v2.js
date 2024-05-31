var express = require("express");

app = express();

//Get Request With URL Query
// http://localhost:8000?firstName=Elmar&lastName=Angao
// app.get("/", function (req, res) {
//   let firstName = req.query.firstName;
//   let lastName = req.query.lastName;

//   res.end(firstName + " " + lastName);
// });

//================================
// Working With Get Request Header
// app.get("/", function (req, res) {
//   let firstName = req.header("firstName");
//   let lastName = req.header("lastName");

//   res.end(firstName + " " + lastName);
// });

//================================
// Simple Post Request
// app.post("/", function (req, res) {
//   res.send("this is simple Post Request");
// });

//================================
// Post Request With URL Query
// app.post("/", function (req, res) {
//   let firstName = req.query.firstName;
//   let lastName = req.query.lastName;

//   res.send(firstName + " " + lastName);
// });

//================================
// Post Request With Header Properties
// app.post("/", function (req, res) {
//   let userName = req.header("userName");
//   let password = req.header("password");

//   res.send("User Name: " + userName + " Password: " + password);
// });

//================================
// // Post application-json
// // https://www.npmjs.com/package/body-parser
// // var bodyParser = require("body-parser");
// // app.use(bodyParser.json());
// app.post("/", function (req, res) {
//   let JSONData = req.body;
//   let JSONString = JSON.stringify(JSONData);
//   res.send(JSONString);
// });

//================================
// // Working With Multipart Form Data
// // https://www.npmjs.com/package/multer
// var multer = require("multer");
// var multer = multer();

// app.use(multer.array());
// app.use(express.static("public"));
// app.post("/", function (req, res) {
//   let JSONData = req.body;
//   res.send(JSON.stringify(JSONData));
// });

// //================================
// //  File Upload
// var multer = require("multer");
// var storage = multer.diskStorage({
//   destination: function (req, file, callBack) {
//     callBack(null, "./upload");
//   },
//   filename: function (req, file, callBack) {
//     callBack(null, file.originalname);
//   },
// });

// var upload = multer({ storage }).single("myfile");

// app.post("/", function (req, res) {
//   upload(req, res, function (err) {
//     if (err) {
//       res.send("Error uploading file.");
//     }

//     res.send("File is uploaded");
//   });
// });

//================================
app.listen(8000, function () {
  console.log("Server is running on port 8000");
});
