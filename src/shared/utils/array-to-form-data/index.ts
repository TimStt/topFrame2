export const arrayToFormData = (
  array: File[],
  name?: string,
  formDataCurrent?: FormData
): FormData => {
  const data = new FormData();

  const dataCurrent = formDataCurrent || data;

  array.forEach((item, index) => {
    if (item instanceof File) {
      dataCurrent.append(name ? name + "[]" : "files[]", item);
      return;
    }

    if (typeof item === "object") {
      Object.entries(item).forEach(([key, value]) => {
        dataCurrent.append(`${name}[${index}][${key}]`, value as string);
      });

      return;
    }

    dataCurrent.append(name + "[]" || "files[]", item);
  });

  return dataCurrent;
};
