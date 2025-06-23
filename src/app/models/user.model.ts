// src/models/user.model.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

export class User extends Model {

  static async listarUsuarios() {
    return [
      { name: 'Manuel', email: 'd0uZU@example.com' },
      { name: 'Paco', email: 'zC9lV@example.com' },
      { name: 'Pepe', email: 'V0k6H@example.com' }
    ]
  }
}
