'use client';

import { useSession } from 'next-auth/react';
import { useByEmail } from "./useByEmail";

export const useCurrent = () => {
  const { data: session } = useSession();
  return useByEmail({ params: { email: session?.user?.email } }, { enabled: !!session });
};

