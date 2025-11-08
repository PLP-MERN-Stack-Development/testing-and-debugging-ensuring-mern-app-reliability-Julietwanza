import React from 'react';
import useFetch from '../hooks/useFetch';

export default function Profile() {
  const user = useFetch('/api/me');
  if (!user) return <div>Loading...</div>;
  return <div data-testid="username">{user.name}</div>;
}
