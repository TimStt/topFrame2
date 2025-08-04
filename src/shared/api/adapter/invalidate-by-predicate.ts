/**
 * @file: invalidate-by-predicate.ts
 * @description: Хелпер для инвалидирования query по первой части ключа
 * @dependencies: @tanstack/react-query, api-client
 * @created: 2024-06-09
 */
import { queryClient } from '@/shared/api/api-client';

/**
 * Инвалидирует все queries, у которых первая часть ключа совпадает с переданным значением.
 * @param keyFirstPart Первая часть queryKey (например, 'favorite-compositions')
 */
export function invalidateByPredicate(keyFirstPart: string) {
  queryClient.invalidateQueries({
    predicate: (query) => query.queryKey[0] === keyFirstPart,
  });
}
