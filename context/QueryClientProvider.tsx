'use client';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useState } from 'react';

// Create a client
export const queryClient = new QueryClient();

export default function ({ children }) {
  return (<QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>);
}
