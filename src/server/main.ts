import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import auth_routes from "./routes/auth_routes";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", auth_routes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
