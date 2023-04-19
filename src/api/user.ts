import { POST } from './request';

export const postLogin = ({ email, password }: { email: string; password: string }) => {
  return POST<{}>('/user/login', {
    email,
    password
  }
)};