import express from "express";
import { register, login } from "../controllers/auth_controllers";

const router = express.Router();

// Route untuk register
router.post("/register", register);
// Route untuk login
router.post("/login", login);

export default router;