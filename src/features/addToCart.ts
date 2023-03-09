import { IProduct } from 'src/entities/product';
import { addProduct } from 'src/entities/cart';
import { useStore } from 'src/services/store';
import { hasAllergy } from 'src/entities/user';
import { useUserStorage } from 'src/services/storageAdapter';
import { useNotifier } from 'src/services/notificationAdapter';

export function useAddToCart() {
  const { cart, updateCart } = useStore();
  const { notify } = useNotifier();
  const { user } = useUserStorage();

  function addToCart(cookie: IProduct) {
    const isDangerous = cookie.toppings.some((ingredient) => hasAllergy(user!, ingredient));
    if (isDangerous) notify('this cookie is dangerous for you(((');
    else {
      const updatedCart = addProduct(cart, cookie);
      updateCart(updatedCart);
      notify('Added to your cart!');
    }
  }

  return { addToCart };
}