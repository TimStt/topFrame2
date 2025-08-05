import React, { Suspense } from 'react';

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

import { queryClient } from '@/shared/api/api-client';

export const WrapperHydrationUI = ({
  children,
  newQueryClient,
}: {
  children: React.ReactNode;
  newQueryClient: QueryClient;
}) => {
  return (
    <HydrationBoundary state={dehydrate(newQueryClient)}>
      {children}
    </HydrationBoundary>
  );
};
