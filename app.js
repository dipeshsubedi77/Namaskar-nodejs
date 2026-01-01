const express = require("express");


const app = express();

const authRoutes = require("./routes/authRoutes");


const { handleHome, renderLogin,  handleLogin } = require("./controller/authController");


// this is to parse the incoming request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static files
app.use(express.static("public/css/"));


// setting view engine
app.set("view engine", "ejs");

// rendering different pages

app.get("/", handleHome);

app.use("/login",authRoutes);

app.use("/register", authRoutes);
// handling form submission for login





app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});



















app.listen(3000, () => {
  console.log("Server is running on port 3000");
});