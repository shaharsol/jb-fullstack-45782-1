import { Router } from "express";
import { createPost, deletePost, getPost, getProfile, updatePost } from "../controllers/profile/controller";

const router = Router()
// DELETE /profile/1
router.get('/', getProfile)
router.get('/:id', getPost)
router.delete('/:id', deletePost)
router.post('/', createPost)
router.patch('/:id', updatePost)


export default router