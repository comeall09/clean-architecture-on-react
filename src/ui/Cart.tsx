import { useStore } from 'src/services/store';

export function Cart() {
  const { cart } = useStore();

  return (
    <div>
      {cart.products.map(({ id, title, price }) => (
        <div key={id}>
          <p>{title}</p>
          <p>{price}</p>
        </div>
      ))}
    </div>
  );
}