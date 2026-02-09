

server.js

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const routes = require("./routes");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());

app.post("/submit", upload.fields([{ name: "images" }, { name: "videos" }]), routes.handleEmergency);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:3000`));
