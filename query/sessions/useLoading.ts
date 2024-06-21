'use client';

import { useSession } from 'next-auth/react';

export const useLoading = () => {
  const { status } = useSession();
  return status === 'loading';
};

