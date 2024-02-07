const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
require("dotenv").config();

app.use(express.json());

app.use(cors());

const userRouter = require("./routes/userRoutes");
const binRouter = require("./routes/binRoutes");
const occasionRouter = require("./routes/occasionRoutes");
const regionAdminRouter = require("./routes/regionAdminRoutes");


app.use("/api/user", userRouter);
app.use("/api/bin", binRouter);
app.use("/api/occasion", occasionRouter);
app.use("/api/region-admin", regionAdminRouter);




app.listen(process.env.PORT || 5000, () =>
  console.log("Server is running on port 5000")
);
