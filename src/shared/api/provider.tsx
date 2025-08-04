'use client';

import { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient, queryClientDuplicate } from './api-client';

export const QueryProvider = ({
  children,
  otherClient,
}: {
  children: ReactNode;
  otherClient?: QueryClient;
}) => {
  return (
    <QueryClientProvider client={otherClient || queryClient}>
      {children}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
};

export const QueryProviderDuplicate = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <QueryClientProvider client={queryClientDuplicate}>
      {children}
    </QueryClientProvider>
  );
};
