import { POST } from './request';
import { createHashPassword, Obj2Query } from '@/utils/tools';

export const postLogin = ({ email, password }: { email: string; password: string }) => {
  return POST<{}>('/user/login', {
    email,
    password: createHashPassword(password)
  }
)};