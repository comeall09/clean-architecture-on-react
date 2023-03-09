import { createContext, useContext, useState } from 'react';
import { IUser } from 'src/entities/user';
import { ICart } from 'src/entities/cart';
import { IOrder } from 'src/entities/order';
import { IProduct } from 'src/entities/product';
import { cookies } from './fakeData';

interface IStoreContext {
  user?: IUser;
  cart: ICart;
  cookies?: IProduct[];
  orders?: IOrder[];
  updateUser: (user: IUser) => void;
  updateCart: (cart: ICart) => void;
  updateOrders: (orders: IOrder[]) => void;
}

const StoreContext = createContext<IStoreContext>({} as IStoreContext);
export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUser>(JSON.parse(localStorage.getItem('user')!) as IUser);
  const [cart, setCart] = useState<ICart>({ products: [] });
  const [orders, setOrders] = useState<IOrder[]>([]);

  const value = {
    user,
    cart,
    cookies,
    orders,
    updateUser: setUser,
    updateCart: setCart,
    updateOrders: setOrders,
    emptyCart: () => setCart({ products: [] }),
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};