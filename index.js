//Create Server
const express = require("express");
const app = express();
app.use(express.json());
//Create rootRouter
const { rootRouter } = require("./routers/root.router");

//Access to Public folder via static path
const path = require("path");
const pathPublicDirectory = path.join(__dirname, "./public");
app.use("/public", express.static(pathPublicDirectory));

//Fix CORS Policy Error
const cors = require("cors");
app.use(cors());

//Main API
app.use("/api", rootRouter);

//Server Listening at Port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
