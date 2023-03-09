import { UserStorageService } from 'src/features/ports';
import { useStore } from './store';

export function useUserStorage(): UserStorageService {
  return useStore();
}