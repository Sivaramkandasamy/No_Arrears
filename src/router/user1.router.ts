import {Router} from 'express';
import {createuser} from '../controller/user1.controller';
import { checkRequestBodyParams } from '../middleware/Validators';
import { basicAuthUser } from '../middleware/checkAuth';
const router:Router=Router();

router.post('/', // create user
    basicAuthUser,
    checkRequestBodyParams('email'),
    createuser
);



export default router