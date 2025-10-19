import { Router } from "express";
import { createPost, deletePost, getPost, getProfile, updatePost } from "../controllers/profile/controller";
import validation from "../middlewares/validation";
import { newPostValidator, updatePostValidator } from "../controllers/profile/validator";

const router = Router()
// DELETE /profile/1
router.get('/', getProfile)
router.get('/:id', getPost)
router.delete('/:id', deletePost)
router.post('/', validation(newPostValidator), createPost)
router.patch('/:id', validation(updatePostValidator), updatePost)


export default router