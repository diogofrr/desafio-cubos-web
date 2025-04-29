import { ResponseData } from '@/types/globals';
import { User } from '../login/login';

interface RegisterArgs {
  name: string;
  email: string;
  password: string;
}

interface RegisterResponse extends ResponseData {
  result: {
    access_token: string;
    user: User;
  };
}

export { RegisterArgs, RegisterResponse };
