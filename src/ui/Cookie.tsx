import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { contains } from 'src/entities/cart';
import { IProduct } from 'src/entities/product';
import { Topping } from './Toppings';

import { useAddToCart } from 'src/features/addToCart';
import { useUserStorage } from 'src/services/storageAdapter';
import { useStore } from 'src/services/store';

export function Cookie(cookie: IProduct) {
  const navigate = useNavigate();
  const { price, title, toppings } = cookie;

  const { cart } = useStore();

  const { addToCart } = useAddToCart();
  const { user } = useUserStorage();

  function handleClick() {
    if (user) {
      addToCart(cookie);
    } else {
      navigate('/auth');
    }
  }

  return (
    <div className='grid grid-cols-2 items-center rounded-md shadow-md p-4 bg-slate-200 overflow-hidden'>
      <span className='text-5xl'>🍪</span>
      <span className='uppercase'>{title}</span>
      <div className='col-span-2 flex gap-3'>
        {toppings.map((name, i) => (
          <Fragment key={name}>
            {i === 0 && <span className='text-gray-500'>toppings: </span>}
            <Topping ingredient={name} />
          </Fragment>
        ))}
      </div>
      {contains(cart, cookie) ? (
        <span title='on cart' className='col-span-2 ml-auto text-3xl cursor-default'>
          ✅
        </span>
      ) : (
        <button onClick={handleClick} title='buy' className='col-span-2 py-2 px-2 ml-auto mt-4 '>
          {price} 💸
        </button>
      )}
    </div>
  );
}