import Express  from "express";
import { login,signup,logout } from "./users.js";

const router = Express.Router();

router.get('/signup',signup);

router.get( '/login',login);

router.get('/logout',logout);

export default router;