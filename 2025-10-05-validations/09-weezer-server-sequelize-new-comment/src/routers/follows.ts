import { Router } from "express";
import { getFollowers, getFollowing } from "../controllers/follows/controller";

const router = Router()

router.get('/following', getFollowing)
router.get('/followers', getFollowers)

export default router