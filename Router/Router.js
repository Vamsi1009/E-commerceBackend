import express from 'express';

import { SignInController,SignUpController,SignUpGetDetailsController,SignInDetailController } from '../controllers/LoginController.js';
import { Authentication } from '../auth.js';


const router = express.Router();


router.post('/api/SignIn',SignInController);
router.get('/api/SignInDetail',SignInDetailController,Authentication);

router.post('/api/SignUp',SignUpController);
router.get('/api/SignUpDetail',SignUpGetDetailsController,Authentication);


export{router as Routes }
