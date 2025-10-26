import { Router } from "express";
import { follow, getFollowers, getFollowing, unfollow } from "../controllers/follows/controller";
import paramValidation from "../middlewares/param-validation";
import { followValidator, unfollowValidator } from "../controllers/follows/validator";

const router = Router()

router.get('/following', getFollowing)
router.get('/followers', getFollowers)
router.post('/follow/:id', paramValidation(followValidator), follow)
router.post('/unfollow/:id', paramValidation(unfollowValidator), unfollow)

export default router