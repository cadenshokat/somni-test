'use client';

import { HeaderClient } from './header-client';
import { useAuth } from '@/contexts/AuthContext';

export function Header() {
  const { user, signOut } = useAuth();

  return <HeaderClient user={user} onSignOut={signOut} />;
}
