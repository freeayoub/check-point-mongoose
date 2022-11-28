const express =require("express");
const connectDB = require("./config/connectDB.js");
const personRoutes = require("./routes/person.js");
const app=express();
app.use(express.json());
const port=3003;

connectDB();
app.use("/api/person",personRoutes);
app.listen(port,console.log(`app is running on port ${port}`));