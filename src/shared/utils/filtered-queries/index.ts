import { z } from "zod";

export const filteredQueries = <Queries extends object | undefined>(
  queries?: Queries,
  schema?: z.ZodSchema<Queries>
) => {
  if (!queries || !schema) return undefined;
  const result = schema?.safeParse(queries);

  console.log("result filtered", result);
  return result.data || ({} as Queries);
};
