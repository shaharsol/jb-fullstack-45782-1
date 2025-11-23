import { Router } from "express";
import { login, signup } from "../controllers/auth/controller";
import validation from "../middlewares/validation";
import { loginValidator, signupValidator } from "../controllers/auth/validator";
import passport from "../oauth/google";
import { sign } from "jsonwebtoken";
import config from 'config'

const router = Router()

router.post('/signup', validation(signupValidator), signup)
router.post('/login', validation(loginValidator), login)

router.get('/google', passport.authenticate('google', { 
    scope: ['profile', 'email', 'https://www.googleapis.com/auth/youtube.upload'],
    session: false 
}));
router.get('/google/callback', 
  passport.authenticate('google', { 
      failureRedirect: '/login' ,
      session: false
  }),
  function(req, res) {
    // Successful authentication, redirect home.
    const jwtSecret = config.get<string>('app.jwtSecret')

    const jwt = sign(req.user, jwtSecret)

    res.redirect(`http://localhost:5173?jwt=${jwt  }`);
  });
export default router