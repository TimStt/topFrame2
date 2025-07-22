export const transformObjectByParams = <ObjectType extends object>(
  object?: ObjectType,
) => {
  if (!object) return undefined;
  const params = new URLSearchParams();
  (Object.entries(object) as Array<[string, string | number]>).forEach(
    ([key, values]) => {
      if (!values) return;
      if (Array.isArray(values)) {
        values.forEach((value) => {
          params.append(key, value.toString());
        });
      }
      params.set(key, values.toString());
    },
  );

  return params.toString();
};
