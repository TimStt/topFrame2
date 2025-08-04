import { arrayToFormData } from '../array-to-form-data';

export const objectToFormData = (
  obj: object,
  name?: string,
  formDataCurrent?: FormData,
): FormData => {
  const data = new FormData();

  const dataCurrent = formDataCurrent || data;
  Object.entries(obj).forEach(([key, value]) => {
    if (value === null || value === undefined || !value) return;

    if (value instanceof File) {
      dataCurrent.append(name || key, value, value.name);
      return;
    }

    if (Array.isArray(value)) {
      arrayToFormData(value, name || key, dataCurrent);

      return;
    }

    if (typeof value === 'string') {
      dataCurrent.append(name || key, value);
      return;
    }

    dataCurrent.append(name || key, String(value));
  });
  return dataCurrent;
};
