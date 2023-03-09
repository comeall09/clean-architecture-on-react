import { UserName } from 'src/entities/user';
import { useAuth } from 'src/services/authAdapter';
import { useStore } from 'src/services/store';
import { Email } from 'src/types';
import { AuthenticationService } from './ports';

// тут описываем СЦЕНАРИЙ авторизации. ЧТО должно произойти, а не КАК
export const useAuthenticate = () => {
  // берём из сервисов логику авторизации, т.е. куда отправлять данные (КАК авторизоваться)
  const auth: AuthenticationService = useAuth();

  // const user = useSelector(state => state.user.info);
  const { user, updateUser } = useStore();

  async function authenticate(name: UserName, email: Email): Promise<void> {
    const authedUser = await auth.auth(name, email);

    // dispatch(updateUser(authedUser));
    localStorage.setItem('user', JSON.stringify(authedUser));
    updateUser(authedUser);
  }

  return { user, authenticate };
};