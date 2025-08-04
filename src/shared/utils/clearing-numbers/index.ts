export const clearingNumbers = (numbers?: string) => {
  if (!numbers) return "";

  const clearNumbers = +numbers.replace(/\D/g, "");

  const clearNumbersStartWithSeven = "7" + clearNumbers?.toString().slice(1);

  return clearNumbersStartWithSeven;
};
