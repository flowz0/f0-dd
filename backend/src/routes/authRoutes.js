import express from "express";
import { /* getUserById, */ checkAuth, login, register } from "../controllers/authController.js";
// import { authenticate } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/check", checkAuth);
// router.post("/me", authenticate, getUserById);

export default router;