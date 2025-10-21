import { Router } from "express";
import { login, signup } from "../controllers/auth/controller";
import validation from "../middlewares/validation";
import { loginValidator, signupValidator } from "../controllers/auth/validator";

const router = Router()

router.post('/signup', validation(signupValidator), signup)
router.post('/login', validation(loginValidator), login)

export default router