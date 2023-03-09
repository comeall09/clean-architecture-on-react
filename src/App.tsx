import { Outlet } from 'react-router-dom';
import { StoreProvider } from './services/store';
import { Header } from './ui/Header';

export function App() {
  return (
    <StoreProvider>
      <>
        <Header />
        <div className='pt-20'>
          <Outlet />
        </div>
      </>
    </StoreProvider>
  );
}