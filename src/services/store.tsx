import { createContext, useContext, useState } from 'react';

import { IUser } from 'src/entities/user';

interface IStoreContext {
  user?: IUser;
  updateUser: (user: IUser) => void;
}

const StoreContext = createContext<IStoreContext>({} as IStoreContext);
export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUser>(JSON.parse(localStorage.getItem('user')!) as IUser);

  const value = {
    user,
    updateUser: setUser,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};