import { Ingredient } from 'src/entities/product';
import { useUserStorage } from 'src/services/storageAdapter';
import { hasAllergy, hasPreference } from 'src/entities/user';

export function Topping({ ingredient }: { ingredient: Ingredient }) {
  const { user } = useUserStorage();

  return (
    <p>
      {ingredient}
      {!!user && hasAllergy(user, ingredient) && (
        <span title='dangerous ingredient for you' className='cursor-default'>
          ⚠️
        </span>
      )}
      {!!user && hasPreference(user, ingredient) && (
        <span title='you like this ingredient' className='cursor-default'>
          👍
        </span>
      )}
    </p>
  );
}