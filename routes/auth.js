import { Router } from 'express';
<<<<<<< HEAD
import { signin, signup,list } from '../controllers/auth';
=======
import { signin, signup, list } from '../controllers/auth';
>>>>>>> a8f2735f9fb9687010ab766106143d2f6a0c93c1
const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
<<<<<<< HEAD
router.get("/user", list);
=======
router.get("/user", list)
>>>>>>> a8f2735f9fb9687010ab766106143d2f6a0c93c1
export default router;