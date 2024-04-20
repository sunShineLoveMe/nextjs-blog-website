import { CredentialsProps } from './../lib/auth'; // 请根据实际路径修改

declare module 'next-auth' {
  interface Credentials {
    username: string;
    password: string;
  }
}