import { Router } from "express";
import { newComment } from "../controllers/comments/controller";
import validation from "../middlewares/validation";
import { newCommentValidator } from "../controllers/comments/validator";

const router = Router()

router.post('/:postId', validation(newCommentValidator), newComment)

export default router