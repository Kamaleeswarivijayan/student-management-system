const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const studentRoutes = require("./routes/studentRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/departments", departmentRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/students", studentRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
app.get("/", (req, res) => {
  res.send("Student Management System API is running 🚀");
});