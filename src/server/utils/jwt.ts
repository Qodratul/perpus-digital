import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

// Generate JWT token
export const generateToken = (payload: object) =>
    jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });

// Verify JWT token
export const verifyToken = (token: string) =>
    jwt.verify(token, JWT_SECRET);
