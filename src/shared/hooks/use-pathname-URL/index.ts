'use client';

import { usePathname, useSearchParams } from 'next/navigation';

export const usePathnameURL = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams?.toString());

  return { pathname, params };
};
