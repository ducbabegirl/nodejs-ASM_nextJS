import { Router } from 'express';
import { signin, signup,list } from '../controllers/auth';
const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/user", list);
export default router;