'use server';

import { cookies } from 'next/headers';

interface CookieOptions {
  name: string;
  value: string;
  secure: boolean;
  httpOnly: boolean;
  expires: number;
}

export const createCookie = async (name: string, value: string) => {
  const cookieStore = await cookies();

  const aYearFromNow = new Date();
  const expires = aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);

  const cookieOptions: CookieOptions = {
    name,
    value,
    secure: true,
    httpOnly: true,
    expires: expires, // Передаём объект Date
  };
  cookieStore.set(cookieOptions);
};

export const getCookie = async (name: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value;
};
export const resetByCookie = async (name: string) => {
  const cookieStore = await cookies();
  return cookieStore.delete(name);
};
