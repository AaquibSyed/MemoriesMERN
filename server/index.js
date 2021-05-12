import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

// server setup
const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

// connect to DB and listen to server when connection is successful
const CONNECTION_URL =
  "mongodb+srv://AaquibSyed19:AaquibSyed19@cluster0.fzxhx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);
