import { Router } from "express";
import { createPost, deletePost, getPost, getProfile, updatePost } from "../controllers/profile/controller";
import validation from "../middlewares/validation";
import { getPostValidator, newPostValidator, updatePostValidator } from "../controllers/profile/validator";
import paramValidation from "../middlewares/param-validation";
import enforceAuth from "../middlewares/enforce-auth";

const router = Router()
// DELETE /profile/1
router.get('/', getProfile)
router.get('/:id', paramValidation(getPostValidator), getPost)
router.delete('/:id', deletePost)
router.post('/', validation(newPostValidator), createPost)
router.patch('/:id', validation(updatePostValidator), updatePost)


export default router