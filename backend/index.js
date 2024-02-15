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
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  };
  
app.use(cors(corsOptions));

// routes
app.post('/upload', uploadcontrol.upload.single('image'), createUserProfile);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));