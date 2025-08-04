'use client';

export const getCookie = (cookieName: string) => {
  if (typeof window === 'undefined') return null;
  const cookie = document.cookie
    .split(';')
    .find((item) => item.includes(cookieName + '='))
    ?.split('=')[1];
  if (!cookie) return null;

  return cookie;
};

export const deleteCookie = async (name: string) => {
  document.cookie = `${name}=; Path=/; Max-Age=-1`;
};

export const setByCookie = async <T extends string | object>(
  name: string,
  data: T,
  days?: number,
) => {
  const date = new Date();

  const decodeData = typeof data === 'string' ? data : JSON.stringify(data);

  let expires = '';
  if (days) {
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }

  document.cookie = `${name}=${
    decodeData + expires
  }; path=/; Secure; SomeSite=Strict`;
};
