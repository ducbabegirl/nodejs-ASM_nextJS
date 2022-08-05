import { Router } from 'express';
import { signin, signup,list ,remove,update} from '../controllers/auth';
const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/user", list);
router.delete('/user/:id', remove);
router.put("/user/:id",update);
export default router;