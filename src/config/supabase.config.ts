// src/config/supabase.config.ts
import { createClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

export const createSupabaseClient = (configService: ConfigService) => {
const supabaseUrl = configService.get<string>('SUPABASE_URL');
  const supabaseAnonKey = configService.get<string>('SUPABASE_ANON_KEY');
  return createClient(supabaseUrl, supabaseAnonKey);
};
