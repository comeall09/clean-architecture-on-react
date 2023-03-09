import { createUser, UserName } from 'src/entities/user';
import { AuthenticationService } from 'src/features/ports';
import { Email } from 'src/types';

export function useAuth(): AuthenticationService {
  return {
    // функция, отправляющая данные юзера на сервер
    auth(name: UserName, email: Email) {
      return new Promise((ok) =>
        setTimeout(() => {
          const user = createUser(name, email, ['marshmallow', 'peanuts'], ['cocoa', 'cherry']);
          ok(user);
        }, 450)
      );
    },
  };
}