import { Router } from "express";
import userController from "../controller/user.controller";
import loginController from "../controller/login.controller";

import userValidate from "../middleware/userValidate.middleware";
import verifyToken from "../middleware/verifyToken.middleware";
import verifyAdminUser from "../middleware/verifyAdmin.middleware";

const router = Router();

router.get('/', userController.getAllUsers);
router.post('/', userValidate.validateUser,userController.createUser);
router.get('/:id', verifyAdminUser.verifyAdmin,verifyToken.verify,userController.getUserById);
router.put('/:id', verifyAdminUser.verifyAdmin,verifyToken.verify,userController.updateUser);
router.delete('/:id',verifyAdminUser.verifyAdmin,verifyToken.verify, userController.deleteUser);
router.post('/login', loginController.login);


export default router;