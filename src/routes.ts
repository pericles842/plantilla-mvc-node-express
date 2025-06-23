// src/routes/user.routes.ts
import { Router } from 'express';
import { UserController } from './controllers/user.controller';

const router = Router();

router.get('/listar', UserController.getAll);


export default router;