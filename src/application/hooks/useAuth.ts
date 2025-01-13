'use client'

import { getAuthCookie } from '@/utils'
import { useQuery } from '@tanstack/react-query';

async function fetchAuth() {
  const { accessToken } = await getAuthCookie();
  return { isAuthenticated: !!accessToken };
}

export function useAuth() {
  const { data } = useQuery({
    queryKey: ['auth'],
    queryFn: fetchAuth
  });

  return data || { isAuthenticated: false };
}

