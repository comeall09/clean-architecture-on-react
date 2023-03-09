import { PriceCents, UniqueId } from 'src/types';

export type Ingredient = string;
type ProductTitle = string;

export interface IProduct {
  id: UniqueId;
  title: ProductTitle;
  price: PriceCents;
  toppings: Ingredient[];
}

export function totalPrice(products: IProduct[]): PriceCents {
  return products.reduce((total, { price }) => total + price, 0);
}