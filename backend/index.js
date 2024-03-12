import express from "express";
import cors from "cors";
import MatkulRoute from "./routes/MatkulRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(MatkulRoute);

app.listen (5000, () => console.log('Server up and running...'));