import { useAppSelector } from '../app/hooks';
import { User } from '../types/User';

export function useAuth() {
  const { user } = useAppSelector(state => state.user);

  const { email, password, id } = user as User;

  return {
    isAuth: !!email,
    email,
    password,
    id,
  };
}
