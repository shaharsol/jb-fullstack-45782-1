import { Router } from "express";
import { createPost, deletePost, getPost, getProfile, updatePost } from "../controllers/profile/controller";
import validation from "../middlewares/validation";
import { getPostValidator, newPostImageValidator, newPostValidator, updatePostValidator } from "../controllers/profile/validator";
import paramValidation from "../middlewares/param-validation";
import enforceAuth from "../middlewares/enforce-auth";
import fileUploader from "../middlewares/file-uploader";
import fileValidation from "../middlewares/file-validation";

const router = Router()
// DELETE /profile/1
router.get('/', getProfile)
router.get('/:id', paramValidation(getPostValidator), getPost)
router.delete('/:id', deletePost)
router.post('/', validation(newPostValidator), fileValidation(newPostImageValidator) , fileUploader, createPost)
router.patch('/:id', validation(updatePostValidator), updatePost)


export default router