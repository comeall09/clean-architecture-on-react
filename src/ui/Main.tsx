import { useStore } from 'src/services/store';
import { Cookie } from './Cookie';

export function Main() {
  const { cookies } = useStore();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-8'>
      {cookies?.map((cookie) => (
        <Cookie key={cookie.id} {...cookie} />
      ))}
    </div>
  );
}