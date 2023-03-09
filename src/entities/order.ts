import { currentDateString } from 'src/lib/helpers';
import { DateTimeString, PriceCents, UniqueId } from 'src/types';
import { ICart } from './cart';
import { totalPrice } from './product';
import { IUser } from './user';

type OrderStatus = 'new' | 'delivery' | 'completed';

export interface IOrder {
  user: UniqueId;
  cart: ICart;
  created: DateTimeString;
  status: OrderStatus;
  total: PriceCents;
}

export function createOrder(user: IUser, cart: ICart): IOrder {
  return {
    cart,
    user: user.id,
    created: currentDateString(),
    status: 'new',
    total: totalPrice(cart.products),
  };
}