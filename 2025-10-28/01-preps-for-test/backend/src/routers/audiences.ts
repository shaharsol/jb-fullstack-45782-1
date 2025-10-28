import { Router } from "express";
import { getAll } from "../controllers/audiences/controller";

const router = Router()

router.get('/', getAll)

export default router