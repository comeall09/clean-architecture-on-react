import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserName } from 'src/entities/user';
import { useAuthenticate } from 'src/features/authenticate';
import { Email } from 'src/types';

export function Auth() {
  const navigate = useNavigate();
  const { user, authenticate } = useAuthenticate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const [name, setName] = useState<UserName>('');
  const [email, setEmail] = useState<Email>('');

  function handleSubmit() {
    authenticate(name, email);
  }

  return (
    <div className='w-full min-h-[80vh] flex justify-center items-center'>
      <div className='flex flex-col gap-4'>
        <label className='flex flex-col'>
          Name
          <input autoFocus type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className='flex flex-col'>
          Email
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
}