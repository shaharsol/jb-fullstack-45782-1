import { Router } from "express";
import { filterByAudience } from "../controllers/games/controller";
import { gamesByAudienceIdValidator } from "../controllers/games/validator";
import paramValidation from "../middlewares/param-validation";

const router = Router()

router.get('/by-audience/:audienceId', paramValidation(gamesByAudienceIdValidator) , filterByAudience)

export default router