import { Router } from "express";
import { deletePost, getPost, getProfile } from "../controllers/profile/controller";

const router = Router()
// DELETE /profile/1
router.get('/', getProfile)
router.get('/:id', getPost)
router.delete('/:id', deletePost)

export default router