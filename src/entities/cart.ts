import { IProduct } from './product';

export interface ICart {
  products: IProduct[];
}

export function addProduct(cart: ICart, product: IProduct): ICart {
  return { ...cart, products: [...cart.products, product] };
}

export function contains(cart: ICart, product: IProduct): boolean {
  return cart.products.some(({ id }) => id === product.id);
}