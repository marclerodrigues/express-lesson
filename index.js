const express = require("express");
const path = require("path");
const app = express();
const port = 3001;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, '/src/views'));

app.use(express.static("public"));

// Routes
const projects = require("./src/routes/projects");

app.use("/projects", projects);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
