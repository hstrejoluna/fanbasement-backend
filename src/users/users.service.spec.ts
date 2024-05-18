import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { getRepositoryToken, DataSource } from 'typeorm';
import { SupabaseModule } from '../supabase/supabase.module';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forFeature([User]),
        SupabaseModule,
      ],
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
        {
          provide: 'SUPABASE_CLIENT',
          useValue: {}, // Provide a mock or actual implementation of Supabase client
        },
        {
          provide: DataSource,
          useValue: {}, // Mock DataSource
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
