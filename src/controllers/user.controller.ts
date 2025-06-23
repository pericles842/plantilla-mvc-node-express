// src/models/user.model.ts
import { sequelize } from '../config/db';
import { User } from '../models/user.model';

export class UserController {

  static async getAll(req: any, res: any) {
    try {
      const users = await User.listarUsuarios();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  }
}