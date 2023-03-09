import { Link } from 'react-router-dom';
import { useUserStorage } from 'src/services/storageAdapter';

export function Header() {
  const { user } = useUserStorage();

  return (
    <div className='w-full bg-blue-200 flex justify-between items-center fixed px-8 py-6'>
      <h4>Cookieeeeees!!!!!</h4>
      {user ? (
        <div className='flex gap-2 items-center'>
          <Link to={'/cart'} title='Cart' className='text-2xl'>
            🛒
          </Link>
          <Link type='button' to={'/user'}>
            {user.name}
          </Link>
        </div>
      ) : (
        <Link to={'/auth'}>Log In</Link>
      )}
    </div>
  );
}
