import { range } from '../range';

export function getPageNumbersPagination(
  lastPages: number,
  currentPages?: number,
) {
  const totalPages = lastPages;
  const currentPage = currentPages;
  const pageNeighbours = 2;
  const totalNumbers = 5;
  const totalBlocks = totalNumbers + 2;

  if (totalPages > totalBlocks && currentPage) {
    const startPage = Math.max(2, currentPage - pageNeighbours);
    const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
    let pages: (number | '...')[] = range(startPage, endPage);

    /**
     * hasLeftSpill: есть скрытые страницы слева
     * hasRightSpill: есть скрытые страницы справа
     * spillOffset: количество скрытых страниц слева или справа
     */
    const hasLeftSpill = startPage > 2;
    const hasRightSpill = totalPages - endPage > 1;
    const spillOffset = totalNumbers - (pages.length + 1);
    switch (true) {
      // handle: (1) < {5 6} [7] {8 9} (10)
      case hasLeftSpill && !hasRightSpill: {
        const extraPages = range(startPage - spillOffset, startPage - 1);
        pages = ['...', ...extraPages, ...pages];
        break;
      }
      // handle: (1) {2 3} [4] {5 6} > (10)
      case !hasLeftSpill && hasRightSpill: {
        const extraPages = range(endPage + 1, endPage + spillOffset);
        pages = [...pages, ...extraPages, '...'];
        break;
      }
      // handle: (1) < {4 5} [6] {7 8} > (10)
      case hasLeftSpill && hasRightSpill:
      default: {
        pages = ['...', ...pages, '...'];
        break;
      }
    }
    return [1, ...pages, totalPages];
  }
  return range(1, totalPages);
}
