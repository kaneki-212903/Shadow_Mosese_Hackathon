require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/auth");
const { createUserProfile } = require('./controllers/profilecontroller');
const uploadcontrol = require('./controllers/uploadcontrol');

const app = express();

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.post('/upload', uploadcontrol.upload.single('image'), createUserProfile);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));