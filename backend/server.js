require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const uploadRoutes = require("./routes/uploadRoutes");
const importRoutes = require("./routes/importRoutes");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use(uploadRoutes);
app.use(importRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
