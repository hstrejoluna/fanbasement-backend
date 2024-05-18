import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('SUPABASE_CLIENT') private readonly supabase,
  ) {}

  async findAll(): Promise<User[]> {
    const { data, error } = await this.supabase.from('users').select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async create(userData: Partial<User>): Promise<User> {
    const { data, error } = await this.supabase.from('users').insert([userData]);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
}
