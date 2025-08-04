export const detectRussianText = (text?: string) => {
  if (!text) return false;

  const cyrillicPattern = /[а-яА-ЯЁё]/;

  return cyrillicPattern.test(text);
};
